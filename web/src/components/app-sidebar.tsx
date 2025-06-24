import {
	Calendar,
	Home,
	Settings,
	Activity,
	Video,
	LogOut,
	User,
	Archive,
} from "lucide-react";
import { Link, linkOptions } from "@tanstack/react-router";
import { useAuth } from "@/lib/AuthContext";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Menu items for the main navigation
const items = linkOptions([
	{
		title: "Overview",
		to: "/dashboard",
		icon: Home,
		activeOptions: {
			exact: true,
		},
	},
	{
		title: "Archived Content",
		to: "/dashboard/content",
		icon: Video,
	},
	{
		title: "Activity Log",
		to: "/dashboard/activity",
		icon: Activity,
	},
	{
		title: "Settings",
		to: "/dashboard/settings",
		icon: Settings,
	},
]);

export function AppSidebar() {
	const { setIsLoggedIn } = useAuth();

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<Sidebar className="border-r">
			<SidebarHeader className="border-b px-6 py-4">
				<div className="flex items-center gap-3">
					<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm">
						DT
					</div>
					<div className="flex flex-col">
						<span className="font-semibold text-sidebar-foreground">
							DataTok
						</span>
						<span className="text-xs text-sidebar-foreground/60">
							Archive Manager
						</span>
					</div>
				</div>
			</SidebarHeader>

			<SidebarContent className="px-4 py-4">
				<SidebarGroup>
					<SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider mb-2">
						Navigation
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild className="w-full">
										<Link
											{...item}
											className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-sidebar-accent"
											activeProps={{
												className:
													"bg-sidebar-accent text-sidebar-accent-foreground font-medium",
											}}
										>
											<item.icon className="h-4 w-4" />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup className="mt-8">
					<SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider mb-2">
						Quick Stats
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<div className="space-y-3">
							<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-sidebar-accent/50">
								<div className="flex items-center gap-2">
									<Archive className="h-4 w-4 text-sidebar-foreground/60" />
									<span className="text-sm text-sidebar-foreground/80">
										Archived
									</span>
								</div>
								<span className="text-sm font-medium text-sidebar-foreground">
									1,254
								</span>
							</div>
							<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-sidebar-accent/50">
								<div className="flex items-center gap-2">
									<Activity className="h-4 w-4 text-sidebar-foreground/60" />
									<span className="text-sm text-sidebar-foreground/80">
										Pending
									</span>
								</div>
								<span className="text-sm font-medium text-sidebar-foreground">
									12
								</span>
							</div>
						</div>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="border-t px-4 py-4">
				<div className="flex items-center gap-3 mb-3">
					<Avatar className="h-8 w-8">
						<AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium">
							TU
						</AvatarFallback>
					</Avatar>
					<div className="flex flex-col flex-1 min-w-0">
						<span className="text-sm font-medium text-sidebar-foreground truncate">
							TikTok User
						</span>
						<span className="text-xs text-sidebar-foreground/60 truncate">
							Connected Account
						</span>
					</div>
				</div>
				<Button
					variant="ghost"
					size="sm"
					onClick={handleLogout}
					className="w-full justify-start gap-2 text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent"
				>
					<LogOut className="h-4 w-4" />
					Logout
				</Button>
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
}
