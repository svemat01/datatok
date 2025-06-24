import { createFileRoute } from "@tanstack/react-router";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
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
	Archive,
	Clock,
	HardDrive,
	TrendingUp,
	CheckCircle,
	AlertCircle,
	Loader2,
} from "lucide-react";

const MOCK_REQUESTS = [
	{
		id: "REQ-001",
		date: "2024-10-26",
		status: "Completed",
		lastUpdated: "2024-10-26 10:00 AM",
		type: "Full Archive",
	},
	{
		id: "REQ-002",
		date: "2024-10-27",
		status: "In Progress",
		lastUpdated: "2024-10-28 11:30 AM",
		type: "Incremental",
	},
	{
		id: "REQ-003",
		date: "2024-10-28",
		status: "Pending",
		lastUpdated: "2024-10-28 09:00 AM",
		type: "Full Archive",
	},
];

const getStatusBadge = (status: string) => {
	switch (status) {
		case "Completed":
			return (
				<Badge
					variant="secondary"
					className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
				>
					<CheckCircle className="w-3 h-3 mr-1" />
					Completed
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
		default:
			return (
				<Badge variant="secondary">
					<AlertCircle className="w-3 h-3 mr-1" />
					Unknown
				</Badge>
			);
	}
};

export const Route = createFileRoute("/dashboard/")({
	component: DashboardIndex,
	staticData: {
		routeTitle: "Overview",
	},
});

function DashboardIndex() {
	return (
		<div className="space-y-8">
			{/* Welcome Section */}
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
				<p className="text-muted-foreground text-lg">
					Here's an overview of your TikTok archiving activity.
				</p>
			</div>

			{/* Stats Grid */}
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">
							Total Archived
						</CardTitle>
						<Archive className="h-4 w-4 text-purple-600 dark:text-purple-400" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
							1,254
						</div>
						<p className="text-xs text-purple-600 dark:text-purple-400">
							+12% from last month
						</p>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
							Storage Used
						</CardTitle>
						<HardDrive className="h-4 w-4 text-blue-600 dark:text-blue-400" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
							5.8 GB
						</div>
						<div className="mt-2">
							<Progress value={38} className="h-2" />
							<p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
								38% of 15 GB used
							</p>
						</div>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-md bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-300">
							Pending Items
						</CardTitle>
						<Clock className="h-4 w-4 text-orange-600 dark:text-orange-400" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-orange-900 dark:text-orange-100">
							12
						</div>
						<p className="text-xs text-orange-600 dark:text-orange-400">
							Processing queue
						</p>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
							Success Rate
						</CardTitle>
						<TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-900 dark:text-green-100">
							99.2%
						</div>
						<p className="text-xs text-green-600 dark:text-green-400">
							Last 30 days
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Data Requests Table */}
			<Card className="border-0 shadow-md">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Archive className="h-5 w-5" />
						Data Portability Requests
					</CardTitle>
					<CardDescription>
						Track the status of your TikTok data requests and archiving
						progress.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="rounded-md border">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Request ID</TableHead>
									<TableHead>Type</TableHead>
									<TableHead>Date Sent</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Last Updated</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{MOCK_REQUESTS.map((request) => (
									<TableRow key={request.id}>
										<TableCell className="font-medium">{request.id}</TableCell>
										<TableCell>
											<Badge variant="outline">{request.type}</Badge>
										</TableCell>
										<TableCell>{request.date}</TableCell>
										<TableCell>{getStatusBadge(request.status)}</TableCell>
										<TableCell className="text-muted-foreground">
											{request.lastUpdated}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
					<div className="mt-4 p-4 bg-muted/50 rounded-lg">
						<p className="text-sm text-muted-foreground">
							💡 <strong>Tip:</strong> Data requests are processed automatically
							by DataTok's backend. Status updates are provided in real-time as
							TikTok processes your requests.
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
