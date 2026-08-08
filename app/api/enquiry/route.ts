import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Simulate brief network latency
    await new Promise((resolve) => setTimeout(resolve, 600));

    const body = await request.json();
    const { fullName, workEmail, companyName, phoneNumber, trainingRequirement, teamSize, message } = body;

    const errors: Record<string, string> = {};

    // Server Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!workEmail || typeof workEmail !== 'string' || !emailRegex.test(workEmail)) {
      errors.workEmail = 'Please provide a valid corporate work email address.';
    }

    if (!companyName || typeof companyName !== 'string' || companyName.trim().length < 2) {
      errors.companyName = 'Company / Organization name is required.';
    }

    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{6,15}$/;
    if (!phoneNumber || typeof phoneNumber !== 'string' || !phoneRegex.test(phoneNumber.trim())) {
      errors.phoneNumber = 'Please enter a valid phone number with country code.';
    }

    if (!trainingRequirement || typeof trainingRequirement !== 'string' || trainingRequirement.trim() === '') {
      errors.trainingRequirement = 'Please select a primary training focus.';
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.message = 'Please describe your requirement (at least 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please review highlighted fields.',
          errors,
        },
        { status: 400 }
      );
    }

    // Lead Qualification Scoring Logic
    let leadScore = 'Standard';
    if (teamSize === '50 - 200 employees' || teamSize === '200+ employees') {
      leadScore = 'Enterprise Priority';
    } else if (trainingRequirement.includes('Custom') || trainingRequirement.includes('Executive')) {
      leadScore = 'High Priority';
    }

    const enquiryId = `ACC-ENQ-${Math.floor(100000 + Math.random() * 900000)}`;
    const assignedAdvisor = leadScore === 'Enterprise Priority' ? 'Alex Miller (VP of Enterprise Solutions)' : 'Priya Sharma (Senior Technical Advisor)';

    return NextResponse.json({
      success: true,
      message: `Thank you, ${fullName.trim().split(' ')[0]}! Your consultation request has been logged. An advisor will contact you within 24 hours.`,
      enquiryId,
      assignedAdvisor,
      leadPriority: leadScore,
      slaHours: 24,
      brochureDownloadUrl: `/api/brochure?track=${encodeURIComponent(trainingRequirement)}`,
      receivedData: {
        fullName: fullName.trim(),
        workEmail: workEmail.trim().toLowerCase(),
        companyName: companyName.trim(),
        phoneNumber: phoneNumber.trim(),
        trainingRequirement,
        teamSize: teamSize || 'Unspecified',
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('API Error in /api/enquiry:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected server error occurred while processing your request.',
      },
      { status: 500 }
    );
  }
}
