import {
	createFileRoute,
	Outlet,
	useMatches,
	useRouter,
} from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useAuth } from "@/lib/AuthContext";
import { useEffect } from "react";

export const Route = createFileRoute("/dashboard")({
	component: DashboardLayout,
});

function DashboardLayout() {
	const { isLoggedIn } = useAuth();
	const router = useRouter();

	const matches = useMatches();

	const routeTitle =
		matches.toReversed().find((m) => m.staticData.routeTitle)?.staticData
			.routeTitle ?? "Dashboard";

	useEffect(() => {
		if (!isLoggedIn) {
			router.navigate({ to: "/connect" });
		}
	}, [isLoggedIn, router]);

	// Show loading or redirect if not authenticated
	if (!isLoggedIn) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<div className="text-center">
					<p className="text-muted-foreground">Redirecting to login...</p>
				</div>
			</div>
		);
	}

	return (
		<SidebarProvider>
			<div className="flex min-h-screen w-full">
				<AppSidebar />
				<main className="flex-1 flex flex-col overflow-hidden">
					{/* Top header with sidebar trigger */}
					<header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
						<SidebarTrigger />
						<div className="flex items-center gap-2">
							<h1 className="text-lg font-semibold text-foreground">
								{routeTitle}
							</h1>
						</div>
					</header>

					{/* Main content area */}
					<div className="flex-1 overflow-auto bg-muted/30">
						<div className="container mx-auto p-6 space-y-6">
							<Outlet />
						</div>
					</div>
				</main>
			</div>
		</SidebarProvider>
	);
}
