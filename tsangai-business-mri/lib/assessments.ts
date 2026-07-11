import type { Assessment, SiteConfig } from './types';

import siteConfig from '@/data/config.json';

// To add a new assessment: copy an existing JSON file in /data/assessments,
// edit it, then add one import + one line to the list below.
import businessMri from '@/data/assessments/business-mri.json';
import aiReadiness from '@/data/assessments/ai-readiness.json';
import timeLeak from '@/data/assessments/time-leak.json';
import aiRoi from '@/data/assessments/ai-roi.json';
import websiteConversion from '@/data/assessments/website-conversion.json';
import linkedinAuthority from '@/data/assessments/linkedin-authority.json';
import founderDependency from '@/data/assessments/founder-dependency.json';
import leadResponse from '@/data/assessments/lead-response.json';
import marketingEfficiency from '@/data/assessments/marketing-efficiency.json';
import customerExperience from '@/data/assessments/customer-experience.json';

export const assessments: Assessment[] = [
	businessMri,
	aiReadiness,
	timeLeak,
	aiRoi,
	websiteConversion,
	linkedinAuthority,
	founderDependency,
	leadResponse,
	marketingEfficiency,
	customerExperience,
] as Assessment[];

export const config = siteConfig as SiteConfig;

export function getAssessment(id: string): Assessment | undefined {
	return assessments.find((a) => a.id === id);
}
