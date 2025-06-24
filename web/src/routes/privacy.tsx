import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/privacy")({
	component: PrivacyPolicy,
});

function PrivacyPolicy() {
	return (
		<div className="container mx-auto max-w-4xl py-8 px-4">
			<div className="space-y-8">
				<div className="text-center space-y-4">
					<h1 className="text-4xl font-bold">Privacy Policy</h1>
					<p className="text-lg text-muted-foreground">
						Last updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>1. Information We Collect</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h4 className="font-semibold mb-2">TikTok Account Information</h4>
							<p className="text-sm text-muted-foreground">
								When you connect your TikTok account to DataTok, we collect:
							</p>
							<ul className="list-disc list-inside mt-2 space-y-1 text-sm">
								<li>Your TikTok Open ID (unique identifier)</li>
								<li>Display name and profile information</li>
								<li>Avatar/profile picture</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-2">TikTok Activity Data</h4>
							<p className="text-sm text-muted-foreground">
								Through TikTok's Data Portability API, we access:
							</p>
							<ul className="list-disc list-inside mt-2 space-y-1 text-sm">
								<li>Videos you have liked</li>
								<li>Videos you have bookmarked/saved</li>
								<li>
									Your activity history related to liked and saved content
								</li>
								<li>
									Metadata associated with your interactions (timestamps, etc.)
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Technical Information</h4>
							<ul className="list-disc list-inside mt-2 space-y-1 text-sm">
								<li>IP address and device information</li>
								<li>Browser type and version</li>
								<li>Usage patterns and preferences within DataTok</li>
							</ul>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>2. How We Use Your Information</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							We use your information exclusively for the following purposes:
						</p>
						<ul className="list-disc list-inside space-y-2 text-sm">
							<li>
								<strong>Content Archiving:</strong> To automatically save and
								organize your liked and bookmarked TikTok videos
							</li>
							<li>
								<strong>Service Provision:</strong> To provide you with access
								to your archived content through our dashboard
							</li>
							<li>
								<strong>Account Management:</strong> To maintain your account
								and provide customer support
							</li>
							<li>
								<strong>Service Improvement:</strong> To analyze usage patterns
								and improve our archiving service
							</li>
							<li>
								<strong>Security:</strong> To protect against unauthorized
								access and ensure data integrity
							</li>
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>3. Data Storage and Security</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h4 className="font-semibold mb-2">Storage Location</h4>
							<p className="text-sm text-muted-foreground">
								Your data is stored on secure servers located in the United
								States, with industry-standard encryption both in transit and at
								rest.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Security Measures</h4>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>End-to-end encryption for data transmission</li>
								<li>Encrypted storage of all archived content</li>
								<li>Regular security audits and monitoring</li>
								<li>Access controls and authentication mechanisms</li>
								<li>Secure backup and disaster recovery procedures</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Data Retention</h4>
							<p className="text-sm text-muted-foreground">
								We retain your data for as long as your account is active. You
								may request deletion of your data at any time through your
								account settings or by contacting us.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>4. Data Sharing and Disclosure</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							We do not sell, trade, or otherwise transfer your personal
							information to third parties, except in the following limited
							circumstances:
						</p>
						<ul className="list-disc list-inside space-y-2 text-sm">
							<li>
								<strong>Service Providers:</strong> We may share data with
								trusted service providers who assist in operating our service
								(hosting, analytics, customer support)
							</li>
							<li>
								<strong>Legal Compliance:</strong> When required by law, court
								order, or government regulation
							</li>
							<li>
								<strong>Safety and Security:</strong> To protect the rights,
								property, or safety of DataTok, our users, or others
							</li>
							<li>
								<strong>Business Transfers:</strong> In the event of a merger,
								acquisition, or sale of assets, with prior notice to users
							</li>
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>5. Your Rights and Choices</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<h4 className="font-semibold mb-2">Access and Control</h4>
								<ul className="list-disc list-inside space-y-1 text-sm">
									<li>View and download all your archived data</li>
									<li>Modify your archiving preferences</li>
									<li>Disconnect your TikTok account at any time</li>
									<li>
										Request deletion of your account and all associated data
									</li>
								</ul>
							</div>

							<div>
								<h4 className="font-semibold mb-2">Data Portability</h4>
								<p className="text-sm text-muted-foreground">
									You can export your archived data in standard formats at any
									time through your account dashboard.
								</p>
							</div>

							<div>
								<h4 className="font-semibold mb-2">
									Communication Preferences
								</h4>
								<p className="text-sm text-muted-foreground">
									You can opt out of non-essential communications while
									maintaining service-related notifications.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>6. Cookies and Tracking</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							DataTok uses essential cookies and similar technologies to:
						</p>
						<ul className="list-disc list-inside space-y-1 text-sm">
							<li>Maintain your login session</li>
							<li>Remember your preferences</li>
							<li>Analyze usage patterns to improve our service</li>
							<li>Ensure security and prevent fraud</li>
						</ul>
						<p className="text-sm text-muted-foreground mt-4">
							You can control cookie settings through your browser, though this
							may affect service functionality.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>7. International Data Transfers</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							If you are located outside the United States, please note that
							your information may be transferred to and processed in the United
							States. We ensure appropriate safeguards are in place to protect
							your data in accordance with applicable privacy laws.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>8. Children's Privacy</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							DataTok is not intended for use by individuals under the age of
							13. We do not knowingly collect personal information from children
							under 13. If we become aware that we have collected such
							information, we will take steps to delete it promptly.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>9. Changes to This Privacy Policy</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							We may update this Privacy Policy from time to time. We will
							notify you of any material changes by posting the new Privacy
							Policy on this page and updating the "Last updated" date. Your
							continued use of DataTok after such changes constitutes acceptance
							of the updated policy.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>10. Contact Information</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							If you have any questions about this Privacy Policy or our data
							practices, please contact us:
						</p>
						<div className="space-y-2 text-sm">
							<p>
								<strong>Email:</strong> privacy@datatok.srv.ax
							</p>
						</div>
						<p className="text-sm text-muted-foreground mt-4">
							We will respond to your inquiry within 30 days.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
