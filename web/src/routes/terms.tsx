import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/terms")({
	component: TermsOfService,
});

function TermsOfService() {
	return (
		<div className="container mx-auto max-w-4xl py-8 px-4">
			<div className="space-y-8">
				<div className="text-center space-y-4">
					<h1 className="text-4xl font-bold">Terms of Service</h1>
					<p className="text-lg text-muted-foreground">
						Last updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>1. Acceptance of Terms</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							By accessing and using DataTok ("the Service"), you accept and
							agree to be bound by the terms and provision of this agreement. If
							you do not agree to abide by the above, please do not use this
							service.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>2. Description of Service</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-sm text-muted-foreground">
							DataTok is a content archiving service that allows users to:
						</p>
						<ul className="list-disc list-inside space-y-1 text-sm">
							<li>Connect their TikTok account through official APIs</li>
							<li>Automatically archive liked and bookmarked TikTok videos</li>
							<li>
								Access and manage their archived content through a web dashboard
							</li>
							<li>Export their archived data in standard formats</li>
						</ul>
						<p className="text-sm text-muted-foreground">
							The Service operates in compliance with TikTok's Terms of Service
							and API guidelines.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>3. User Accounts and Registration</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h4 className="font-semibold mb-2">Account Creation</h4>
							<p className="text-sm text-muted-foreground">
								To use DataTok, you must connect your TikTok account through our
								secure OAuth integration. You are responsible for maintaining
								the confidentiality of your account credentials.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Eligibility</h4>
							<p className="text-sm text-muted-foreground">
								You must be at least 13 years old to use this service. Users
								under 18 must have parental consent.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Account Responsibility</h4>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>
									You are responsible for all activities under your account
								</li>
								<li>You must provide accurate and complete information</li>
								<li>You must notify us immediately of any unauthorized use</li>
								<li>You may not share your account with others</li>
							</ul>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>4. Acceptable Use Policy</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h4 className="font-semibold mb-2">Permitted Use</h4>
							<p className="text-sm text-muted-foreground">
								DataTok is intended for personal, non-commercial use to archive
								your own TikTok content that you have liked or bookmarked.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Prohibited Activities</h4>
							<p className="text-sm text-muted-foreground mb-2">You may not:</p>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>Use the service for any illegal or unauthorized purpose</li>
								<li>Violate any laws in your jurisdiction</li>
								<li>
									Attempt to gain unauthorized access to the service or other
									accounts
								</li>
								<li>Interfere with or disrupt the service or servers</li>
								<li>Use automated scripts or bots to access the service</li>
								<li>
									Redistribute or resell archived content without proper rights
								</li>
								<li>
									Reverse engineer, modify, or create derivative works of the
									service
								</li>
							</ul>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>5. TikTok Integration and Compliance</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h4 className="font-semibold mb-2">TikTok API Usage</h4>
							<p className="text-sm text-muted-foreground">
								DataTok uses TikTok's official APIs and complies with TikTok's
								Terms of Service and Developer Policies. Your use of DataTok is
								also subject to TikTok's terms and conditions.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Content Rights</h4>
							<p className="text-sm text-muted-foreground">
								The archived content remains subject to the original creators'
								rights and TikTok's terms. DataTok does not grant you additional
								rights to the archived content beyond personal archiving.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Service Availability</h4>
							<p className="text-sm text-muted-foreground">
								The service depends on TikTok's API availability. We cannot
								guarantee uninterrupted service if TikTok's APIs are unavailable
								or if TikTok changes their terms or API access.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>6. Data and Privacy</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							Your privacy is important to us. Our data collection and use
							practices are detailed in our Privacy Policy, which is
							incorporated into these Terms by reference.
						</p>
						<ul className="list-disc list-inside space-y-1 text-sm">
							<li>
								We only collect data necessary to provide the archiving service
							</li>
							<li>
								We do not sell or share your personal data with third parties
								for marketing
							</li>
							<li>
								You retain ownership of your data and can export or delete it at
								any time
							</li>
							<li>
								We implement industry-standard security measures to protect your
								data
							</li>
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>7. Intellectual Property</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h4 className="font-semibold mb-2">Service Ownership</h4>
							<p className="text-sm text-muted-foreground">
								DataTok and its original content, features, and functionality
								are owned by us and are protected by international copyright,
								trademark, and other intellectual property laws.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">User Content</h4>
							<p className="text-sm text-muted-foreground">
								You retain ownership of your data. By using our service, you
								grant us a limited license to process and store your data solely
								for the purpose of providing the archiving service.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Third-Party Content</h4>
							<p className="text-sm text-muted-foreground">
								Archived TikTok content remains the property of the original
								creators and is subject to their rights and TikTok's terms of
								service.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>8. Service Modifications and Termination</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h4 className="font-semibold mb-2">Service Changes</h4>
							<p className="text-sm text-muted-foreground">
								We reserve the right to modify, suspend, or discontinue the
								service at any time, with or without notice. We will provide
								reasonable notice for significant changes when possible.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Account Termination</h4>
							<p className="text-sm text-muted-foreground">
								We may terminate or suspend your account at our discretion if
								you violate these terms. You may terminate your account at any
								time through your account settings.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Data Upon Termination</h4>
							<p className="text-sm text-muted-foreground">
								Upon account termination, you will have 30 days to export your
								data before it is permanently deleted from our systems.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>9. Disclaimers and Limitations</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h4 className="font-semibold mb-2">Service Availability</h4>
							<p className="text-sm text-muted-foreground">
								The service is provided "as is" without warranties of any kind.
								We do not guarantee that the service will be uninterrupted,
								secure, or error-free.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Limitation of Liability</h4>
							<p className="text-sm text-muted-foreground">
								To the maximum extent permitted by law, we shall not be liable
								for any indirect, incidental, special, consequential, or
								punitive damages, including but not limited to loss of data,
								revenue, or profits.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Third-Party Services</h4>
							<p className="text-sm text-muted-foreground">
								We are not responsible for the availability, content, or
								practices of third-party services, including TikTok's platform
								and APIs.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>10. Indemnification</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							You agree to indemnify and hold harmless DataTok and its
							affiliates from any claims, damages, losses, or expenses arising
							from your use of the service, violation of these terms, or
							infringement of any rights of another party.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>11. Governing Law and Disputes</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h4 className="font-semibold mb-2">Governing Law</h4>
							<p className="text-sm text-muted-foreground">
								These Terms are governed by the laws of Sweden, without regard
								to conflict of law principles.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Dispute Resolution</h4>
							<p className="text-sm text-muted-foreground">
								Any disputes arising from these terms will be resolved through
								binding arbitration.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>12. Changes to Terms</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							We reserve the right to update these Terms of Service at any time.
							Material changes will be communicated via email or through the
							service. Your continued use of the service after changes
							constitutes acceptance of the new terms.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>13. Contact Information</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							If you have any questions about these Terms of Service, please
							contact us:
						</p>
						<div className="space-y-2 text-sm">
							<p>
								<strong>Email:</strong> legal@datatok.srv.ax
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>14. Severability</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							If any provision of these Terms is found to be unenforceable or
							invalid, that provision will be limited or eliminated to the
							minimum extent necessary so that the Terms will otherwise remain
							in full force and effect.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
