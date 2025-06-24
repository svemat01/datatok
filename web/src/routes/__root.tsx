import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useLocation } from "@tanstack/react-router";

import Header from "../components/Header";
import { useAuth } from "@/lib/AuthContext";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const location = useLocation();
	const auth = useAuth();

	// Don't show header on dashboard pages since they have their own layout
	const isDashboard = location.pathname.startsWith("/dashboard");

	return (
		<>
			{!isDashboard && <Header />}
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
