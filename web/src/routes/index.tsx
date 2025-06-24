import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from "@/components/ui/card";

export const Route = createFileRoute("/")({
	component: LandingPage,
});

function LandingPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
			{/* Hero Section */}
			<section className="relative overflow-hidden px-4 py-20 sm:py-32">
				<div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"></div>
				<div className="container relative mx-auto text-center">
					<div className="mx-auto max-w-4xl">
						<div className="mb-6 inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300">
							🚧 Currently in Development - Early Access Available
						</div>
						<h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl">
							Archive Your
							<br />
							<span className="">TikTok Memories</span>
						</h1>
						<p className="mx-auto mt-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300 sm:text-2xl">
							Never lose your favorite moments. Automatically save your liked
							videos, bookmarked content, and activity history with{" "}
							<span className="font-bold text-purple-600">DataTok</span>.
						</p>

						<div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
							<Button
								asChild
								size="lg"
								className="bg-gradient-to-r from-purple-600 to-pink-600 text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
							>
								<Link to="/connect">🚀 Try Early Preview</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="text-lg px-8 py-4 border-2 hover:bg-purple-50 dark:hover:bg-purple-900/20"
							>
								Learn More
							</Button>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
							No signup required • Experience the prototype • Help shape the
							future
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="px-4 py-20">
				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Why DataTok Will Be Essential
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							Your digital memories deserve better protection than hoping
							platforms never change.
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-3">
						<Card className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
							<CardHeader className="text-center pb-4">
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-2xl group-hover:rotate-12 transition-transform duration-300">
									⚡
								</div>
								<CardTitle className="text-2xl">Smart Auto-Archiving</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-center text-base leading-relaxed">
									Set it and forget it. Our intelligent system will
									automatically back up your liked and bookmarked content as you
									discover new videos.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
							<CardHeader className="text-center pb-4">
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-2xl group-hover:rotate-12 transition-transform duration-300">
									🔒
								</div>
								<CardTitle className="text-2xl">Privacy-First Design</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-center text-base leading-relaxed">
									Your data stays yours. We'll use industry-standard encryption
									and transparent practices to keep your memories secure and
									private.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
							<CardHeader className="text-center pb-4">
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-2xl group-hover:rotate-12 transition-transform duration-300">
									👑
								</div>
								<CardTitle className="text-2xl">Complete Ownership</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-center text-base leading-relaxed">
									Your data, your rules. Download, organize, and manage your
									archive however you want. No vendor lock-in, ever.
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="px-4 py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-white mb-4">
							How DataTok Works
						</h2>
						<p className="text-xl text-purple-100 max-w-2xl mx-auto">
							Simple, secure, and automatic - protecting your memories has never
							been easier.
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-3">
						<div className="text-center text-white">
							<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl backdrop-blur-sm">
								🔗
							</div>
							<h3 className="text-2xl font-bold mb-4">1. Connect Securely</h3>
							<p className="text-lg opacity-90 leading-relaxed">
								Authorize DataTok to access your TikTok data using official
								APIs. We only request what we need, when we need it.
							</p>
						</div>
						<div className="text-center text-white">
							<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl backdrop-blur-sm">
								📥
							</div>
							<h3 className="text-2xl font-bold mb-4">2. Auto-Archive</h3>
							<p className="text-lg opacity-90 leading-relaxed">
								Our system continuously monitors your activity and automatically
								saves your liked videos, bookmarks, and more.
							</p>
						</div>
						<div className="text-center text-white">
							<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl backdrop-blur-sm">
								🎯
							</div>
							<h3 className="text-2xl font-bold mb-4">3. Access Anywhere</h3>
							<p className="text-lg opacity-90 leading-relaxed">
								View, search, and download your archived content from our
								dashboard or export it to your preferred storage solution.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Problem/Solution Section */}
			<section className="px-4 py-20">
				<div className="container mx-auto">
					<div className="grid gap-12 lg:grid-cols-2 items-center">
						<div>
							<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
								The Problem is Real
							</h2>
							<div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
								<p className="flex items-start gap-3">
									<span className="text-red-500 text-xl">😰</span>
									TikTok videos disappear when creators delete them or accounts
									get banned
								</p>
								<p className="flex items-start gap-3">
									<span className="text-red-500 text-xl">📱</span>
									Platform changes can make your saved content inaccessible
								</p>
								<p className="flex items-start gap-3">
									<span className="text-red-500 text-xl">🔒</span>
									You don't actually own your digital memories on social
									platforms
								</p>
								<p className="flex items-start gap-3">
									<span className="text-red-500 text-xl">⏰</span>
									Manual downloading is time-consuming and easy to forget
								</p>
							</div>
						</div>
						<div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
							<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
								DataTok's Solution
							</h3>
							<div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
								<p className="flex items-start gap-3">
									<span className="text-green-500 text-xl">✅</span>
									Automatic backup before content can disappear
								</p>
								<p className="flex items-start gap-3">
									<span className="text-green-500 text-xl">✅</span>
									Your own personal archive, independent of TikTok
								</p>
								<p className="flex items-start gap-3">
									<span className="text-green-500 text-xl">✅</span>
									True ownership with full download capabilities
								</p>
								<p className="flex items-start gap-3">
									<span className="text-green-500 text-xl">✅</span>
									Set-and-forget automation that works 24/7
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="px-4 py-20">
				<div className="container mx-auto text-center">
					<div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 shadow-2xl">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
							Be an Early Adopter
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							Help us build the future of digital memory preservation. Try our
							prototype and share your feedback to shape DataTok's development.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-gradient-to-r from-purple-600 to-pink-600 text-xl px-12 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
						>
							<Link to="/connect">🎯 Try the Prototype</Link>
						</Button>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
							Early access • No commitment • Help shape the product
						</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid gap-8 md:grid-cols-4">
						<div className="md:col-span-2">
							<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
								DataTok
							</h3>
							<p className="text-gray-300 mb-4 max-w-md">
								Preserve your TikTok memories with automatic archiving and
								complete data ownership.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-4">Legal</h4>
							<ul className="space-y-2 text-gray-300">
								<li>
									<Link
										to="/privacy"
										className="hover:text-purple-400 transition-colors"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										to="/terms"
										className="hover:text-purple-400 transition-colors"
									>
										Terms of Service
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4">Contact</h4>
							<ul className="space-y-2 text-gray-300">
								<li>support@datatok.srv.ax</li>
								<li>privacy@datatok.srv.ax</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
						<p>
							&copy; {new Date().getFullYear()} DataTok. All rights reserved.
						</p>
						<p className="mt-2 text-sm">
							DataTok is not affiliated with TikTok or ByteDance Ltd.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
