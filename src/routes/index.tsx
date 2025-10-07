import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Main } from "../pages/home";
import { CustomNavbar } from "../components/Navbar";
import { Presential } from "../pages/presential";

import { Footer } from "../components/Footer";
import { Online } from "../pages/online";
import { PlansWrapper } from "../components/PlansWrapper";

import Aos from "aos";
import "aos/dist/aos.css";
import { Pro } from "../pages/pro";
import { Checkout } from "../pages/checkout";
import { Ebook } from "../pages/Ebook/ComoManterOPesoPerdido";
import { CustomFooter } from "../components/CustomFooter";

function AppRoutes(): JSX.Element {
	const location = useLocation();

	React.useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	const customFooter =
		location.pathname === "/ebook/como-manter-o-peso-perdido";

	return (
		<>
			<Suspense
				fallback={
					<div className="w-screen h-screen bg-[#1b1b1b]">
						<h1>Carregando...</h1>
					</div>
				}
			>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<CustomNavbar isSticky={true} />
								<Main />
							</>
						}
					/>
					<Route
						path="/presencial"
						element={
							<>
								<CustomNavbar />
								<PlansWrapper>
									<Presential />
								</PlansWrapper>
							</>
						}
					/>
					<Route
						path="/online"
						element={
							<>
								<CustomNavbar />
								<PlansWrapper>
									<Online />
								</PlansWrapper>
							</>
						}
					/>
					<Route
						path="/pro"
						element={
							<>
								<section className="sections">
									<Pro />
								</section>
							</>
						}
					/>
					<Route path="/ebook/como-manter-o-peso-perdido" element={<Ebook />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
				{!customFooter ? <Footer /> : <CustomFooter />}
			</Suspense>
		</>
	);
}
export { AppRoutes };
