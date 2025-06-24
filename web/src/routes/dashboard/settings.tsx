import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "@tanstack/react-router";
import {
	Settings as SettingsIcon,
	User,
	HardDrive,
	Shield,
	Bell,
	Download,
	Trash2,
	LogOut,
	Heart,
	Bookmark,
	MessageCircle,
	Clock,
	Zap,
	Globe,
	Lock,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/settings")({
	component: Settings,
	staticData: {
		routeTitle: "Settings",
	},
});

function Settings() {
	const { setIsLoggedIn } = useAuth();
	const router = useRouter();

	const handleLogout = () => {
		setIsLoggedIn(false);
		router.navigate({ to: "/" });
	};

	return (
		<div className="space-y-8">
			{/* Header */}
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight">Settings</h1>
				<p className="text-muted-foreground text-lg">
					Manage your archiving preferences, storage, and account settings.
				</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-2">
				{/* Account Information */}
				<Card className="border-0 shadow-md lg:col-span-2">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<User className="h-5 w-5" />
							Account Information
						</CardTitle>
						<CardDescription>
							Your connected TikTok account details and connection status.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border">
							<div className="flex items-center gap-3">
								<div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
									TU
								</div>
								<div>
									<div className="font-semibold">TikTok User</div>
									<div className="text-sm text-muted-foreground">
										@tiktok_user_123
									</div>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Badge
									variant="secondary"
									className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
								>
									<div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
									Connected
								</Badge>
							</div>
						</div>
						<div className="grid gap-4 md:grid-cols-2">
							<div className="space-y-1">
								<Label className="text-sm font-medium">Connected Since</Label>
								<p className="text-sm text-muted-foreground">
									October 28, 2024
								</p>
							</div>
							<div className="space-y-1">
								<Label className="text-sm font-medium">Last Sync</Label>
								<p className="text-sm text-muted-foreground">2 minutes ago</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Archiving Preferences */}
				<Card className="border-0 shadow-md">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<SettingsIcon className="h-5 w-5" />
							Archiving Preferences
						</CardTitle>
						<CardDescription>
							Configure what content gets automatically archived.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<Heart className="h-4 w-4 text-pink-500" />
									<div>
										<Label htmlFor="auto-archive-likes" className="font-medium">
											Liked Videos
										</Label>
										<p className="text-sm text-muted-foreground">
											Auto-archive videos you like
										</p>
									</div>
								</div>
								<Switch id="auto-archive-likes" defaultChecked />
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<Bookmark className="h-4 w-4 text-blue-500" />
									<div>
										<Label
											htmlFor="auto-archive-bookmarks"
											className="font-medium"
										>
											Bookmarked Videos
										</Label>
										<p className="text-sm text-muted-foreground">
											Auto-archive bookmarked content
										</p>
									</div>
								</div>
								<Switch id="auto-archive-bookmarks" defaultChecked />
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<MessageCircle className="h-4 w-4 text-green-500" />
									<div>
										<Label htmlFor="archive-comments" className="font-medium">
											Comments
										</Label>
										<p className="text-sm text-muted-foreground">
											Include your comments in archives
										</p>
									</div>
								</div>
								<Switch id="archive-comments" />
							</div>
						</div>

						<div className="pt-4 border-t">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<Clock className="h-4 w-4 text-orange-500" />
									<div>
										<Label className="font-medium">Sync Frequency</Label>
										<p className="text-sm text-muted-foreground">
											How often to check for new content
										</p>
									</div>
								</div>
								<Badge variant="outline">Every 24 hours</Badge>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Storage Management */}
				<Card className="border-0 shadow-md">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<HardDrive className="h-5 w-5" />
							Storage Management
						</CardTitle>
						<CardDescription>
							Monitor and manage your archive storage usage.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<Label className="font-medium">Storage Used</Label>
								<span className="text-sm font-medium">5.8 GB / 15 GB</span>
							</div>
							<Progress value={38} className="h-3" />
							<p className="text-sm text-muted-foreground">
								38% of your storage quota is being used
							</p>
						</div>

						<div className="grid gap-3">
							<div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
								<div className="flex items-center gap-2">
									<Heart className="h-4 w-4 text-pink-500" />
									<span className="text-sm">Liked Videos</span>
								</div>
								<span className="text-sm font-medium">3.2 GB</span>
							</div>
							<div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
								<div className="flex items-center gap-2">
									<Bookmark className="h-4 w-4 text-blue-500" />
									<span className="text-sm">Bookmarked</span>
								</div>
								<span className="text-sm font-medium">2.1 GB</span>
							</div>
							<div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
								<div className="flex items-center gap-2">
									<MessageCircle className="h-4 w-4 text-green-500" />
									<span className="text-sm">Comments</span>
								</div>
								<span className="text-sm font-medium">0.5 GB</span>
							</div>
						</div>

						<Button variant="outline" className="w-full">
							<Download className="h-4 w-4 mr-2" />
							Export Archive
						</Button>
					</CardContent>
				</Card>

				{/* Privacy & Security */}
				<Card className="border-0 shadow-md">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Shield className="h-5 w-5" />
							Privacy & Security
						</CardTitle>
						<CardDescription>
							Control your data privacy and security settings.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<Lock className="h-4 w-4 text-purple-500" />
								<div>
									<Label className="font-medium">End-to-End Encryption</Label>
									<p className="text-sm text-muted-foreground">
										Encrypt your archived data
									</p>
								</div>
							</div>
							<Switch defaultChecked />
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<Globe className="h-4 w-4 text-blue-500" />
								<div>
									<Label className="font-medium">Share Analytics</Label>
									<p className="text-sm text-muted-foreground">
										Help improve DataTok with usage data
									</p>
								</div>
							</div>
							<Switch />
						</div>
					</CardContent>
				</Card>

				{/* Notifications */}
				<Card className="border-0 shadow-md">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Bell className="h-5 w-5" />
							Notifications
						</CardTitle>
						<CardDescription>
							Configure when and how you receive notifications.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between">
							<div>
								<Label className="font-medium">Archive Complete</Label>
								<p className="text-sm text-muted-foreground">
									Notify when archiving is finished
								</p>
							</div>
							<Switch defaultChecked />
						</div>

						<div className="flex items-center justify-between">
							<div>
								<Label className="font-medium">Storage Warnings</Label>
								<p className="text-sm text-muted-foreground">
									Alert when storage is running low
								</p>
							</div>
							<Switch defaultChecked />
						</div>

						<div className="flex items-center justify-between">
							<div>
								<Label className="font-medium">Weekly Summary</Label>
								<p className="text-sm text-muted-foreground">
									Weekly archive activity report
								</p>
							</div>
							<Switch />
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Danger Zone */}
			<Card className="border-0 shadow-md border-red-200 dark:border-red-900/50">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
						<Trash2 className="h-5 w-5" />
						Danger Zone
					</CardTitle>
					<CardDescription>
						Irreversible actions that affect your account and data.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900/50">
						<div>
							<Label className="font-medium text-red-700 dark:text-red-400">
								Clear All Archives
							</Label>
							<p className="text-sm text-red-600 dark:text-red-500">
								Permanently delete all your archived content
							</p>
						</div>
						<Button variant="destructive" size="sm">
							<Trash2 className="h-4 w-4 mr-2" />
							Clear All
						</Button>
					</div>

					<div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900/50">
						<div>
							<Label className="font-medium text-red-700 dark:text-red-400">
								Disconnect Account
							</Label>
							<p className="text-sm text-red-600 dark:text-red-500">
								Disconnect from TikTok and stop archiving
							</p>
						</div>
						<Button variant="destructive" size="sm" onClick={handleLogout}>
							<LogOut className="h-4 w-4 mr-2" />
							Disconnect
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
