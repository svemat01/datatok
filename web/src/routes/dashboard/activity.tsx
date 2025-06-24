import { createFileRoute } from "@tanstack/react-router";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
	Activity,
	CheckCircle,
	Clock,
	AlertCircle,
	Loader2,
	Video,
	MessageCircle,
	Heart,
	TrendingUp,
} from "lucide-react";

const MOCK_ACTIVITY = [
	{
		item: "Dancing cat compilation",
		creator: "@funnycats",
		type: "Video",
		id: "729847362",
		status: "Stored",
		date: "2024-10-28 11:35 AM",
		size: "2.4 MB",
	},
	{
		item: "Cooking tutorial: Pasta",
		creator: "@chefmaster",
		type: "Video",
		id: "728394756",
		status: "In Progress",
		date: "2024-10-28 11:34 AM",
		size: "5.1 MB",
	},
	{
		item: "Workout routine morning",
		creator: "@fitnesslife",
		type: "Video",
		id: "727583947",
		status: "Pending",
		date: "2024-10-28 11:33 AM",
		size: "3.8 MB",
	},
	{
		item: 'Comment: "Love this!"',
		creator: "@user123",
		type: "Comment",
		id: "987654321",
		status: "Error",
		date: "2024-10-28 11:32 AM",
		size: "0.1 KB",
	},
	{
		item: "Travel vlog: Japan",
		creator: "@wanderlust",
		type: "Video",
		id: "726482937",
		status: "Stored",
		date: "2024-10-28 11:30 AM",
		size: "8.2 MB",
	},
	{
		item: "DIY home decor tips",
		creator: "@homedesign",
		type: "Video",
		id: "725394857",
		status: "Stored",
		date: "2024-10-28 11:28 AM",
		size: "4.6 MB",
	},
];

const getStatusBadge = (status: string) => {
	switch (status) {
		case "Stored":
			return (
				<Badge
					variant="secondary"
					className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
				>
					<CheckCircle className="w-3 h-3 mr-1" />
					Stored
				</Badge>
			);
		case "In Progress":
			return (
				<Badge
					variant="secondary"
					className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
				>
					<Loader2 className="w-3 h-3 mr-1 animate-spin" />
					In Progress
				</Badge>
			);
		case "Pending":
			return (
				<Badge
					variant="secondary"
					className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
				>
					<Clock className="w-3 h-3 mr-1" />
					Pending
				</Badge>
			);
		case "Error":
			return (
				<Badge
					variant="secondary"
					className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
				>
					<AlertCircle className="w-3 h-3 mr-1" />
					Error
				</Badge>
			);
		default:
			return <Badge variant="secondary">Unknown</Badge>;
	}
};

const getTypeIcon = (type: string) => {
	switch (type) {
		case "Video":
			return <Video className="h-4 w-4" />;
		case "Comment":
			return <MessageCircle className="h-4 w-4" />;
		case "Like":
			return <Heart className="h-4 w-4" />;
		default:
			return <Activity className="h-4 w-4" />;
	}
};

export const Route = createFileRoute("/dashboard/activity")({
	component: ActivityLog,
	staticData: {
		routeTitle: "Activity Log",
	},
});

function ActivityLog() {
	const storedCount = MOCK_ACTIVITY.filter(
		(item) => item.status === "Stored",
	).length;
	const inProgressCount = MOCK_ACTIVITY.filter(
		(item) => item.status === "In Progress",
	).length;
	const pendingCount = MOCK_ACTIVITY.filter(
		(item) => item.status === "Pending",
	).length;
	const errorCount = MOCK_ACTIVITY.filter(
		(item) => item.status === "Error",
	).length;

	return (
		<div className="space-y-8">
			{/* Header */}
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight">Activity Log</h1>
				<p className="text-muted-foreground text-lg">
					Monitor real-time archiving progress and status updates for your
					TikTok content.
				</p>
			</div>

			{/* Status Overview */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
							Successfully Stored
						</CardTitle>
						<CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-900 dark:text-green-100">
							{storedCount}
						</div>
						<p className="text-xs text-green-600 dark:text-green-400">
							Ready to access
						</p>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
							In Progress
						</CardTitle>
						<Loader2 className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-spin" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
							{inProgressCount}
						</div>
						<div className="mt-2">
							<Progress value={65} className="h-2" />
							<p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
								Processing...
							</p>
						</div>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-md bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950/50 dark:to-orange-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
							Pending
						</CardTitle>
						<Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">
							{pendingCount}
						</div>
						<p className="text-xs text-yellow-600 dark:text-yellow-400">
							In queue
						</p>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-md bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-red-700 dark:text-red-300">
							Errors
						</CardTitle>
						<AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-red-900 dark:text-red-100">
							{errorCount}
						</div>
						<p className="text-xs text-red-600 dark:text-red-400">
							Need attention
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Activity Table */}
			<Card className="border-0 shadow-md">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Activity className="h-5 w-5" />
						Recent Activity
					</CardTitle>
					<CardDescription>
						Detailed log of archiving operations and their current status.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="rounded-md border">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Content</TableHead>
									<TableHead>Type</TableHead>
									<TableHead>TikTok ID</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Size</TableHead>
									<TableHead>Date</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{MOCK_ACTIVITY.map((activity) => (
									<TableRow key={activity.id}>
										<TableCell>
											<div className="space-y-1">
												<div className="font-medium">{activity.item}</div>
												<div className="text-sm text-muted-foreground">
													{activity.creator}
												</div>
											</div>
										</TableCell>
										<TableCell>
											<div className="flex items-center gap-2">
												{getTypeIcon(activity.type)}
												<span className="text-sm">{activity.type}</span>
											</div>
										</TableCell>
										<TableCell className="font-mono text-sm">
											{activity.id}
										</TableCell>
										<TableCell>{getStatusBadge(activity.status)}</TableCell>
										<TableCell className="text-sm text-muted-foreground">
											{activity.size}
										</TableCell>
										<TableCell className="text-sm text-muted-foreground">
											{activity.date}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
					<div className="mt-4 p-4 bg-muted/50 rounded-lg">
						<p className="text-sm text-muted-foreground">
							⚡ <strong>Real-time updates:</strong> This log refreshes
							automatically as TikTok processes your data requests. Processing
							times vary based on content size and TikTok's current load.
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
