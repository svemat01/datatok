import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/AuthContext";
import { Button } from "./ui/button";

export default function Header() {
	const { isLoggedIn } = useAuth();

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center mx-auto">
				<div className="mr-4 flex">
					<Link to="/" className="mr-6 flex items-center space-x-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm">
							DT
						</div>
						<span className="font-bold text-lg">DataTok</span>
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<nav className="flex items-center gap-4">
						{isLoggedIn ? (
							<>
								<Link
									to="/dashboard"
									className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
									activeProps={{ className: "font-semibold text-primary" }}
								>
									Dashboard
								</Link>
								<Link
									to="/dashboard/settings"
									className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
									activeProps={{ className: "font-semibold text-primary" }}
								>
									Settings
								</Link>
							</>
						) : (
							<Button
								asChild
								className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
							>
								<Link to="/connect">Connect with TikTok</Link>
							</Button>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
}
