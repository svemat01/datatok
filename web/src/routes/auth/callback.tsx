import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";

export const Route = createFileRoute("/auth/callback")({
	component: AuthCallback,
});

function AuthCallback() {
	const { setIsLoggedIn } = useAuth();
	const router = useRouter();

	useEffect(() => {
		// Simulate successful login
		setIsLoggedIn(true);
		// Redirect to dashboard
		router.navigate({ to: "/dashboard" });
	}, [setIsLoggedIn, router]);

	return (
		<div className="container mx-auto mt-10 text-center">
			<p>Logging you in...</p>
		</div>
	);
}
