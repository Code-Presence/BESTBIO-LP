import {
	Typography,
	Button,
	Card,
	CardHeader,
	CardFooter,
	CardBody,
} from "@material-tailwind/react";

import GenteMalhando from "../../../assets/bg/gente-se-exercitando.webp";
import GenteNoCampo from "../../../assets/bg/gentee-no-campo.webp";
import MulherComendo from "../../../assets/PESSOA-SAUDAVEL.webp";

import Ebook1 from "../../../assets/Mocks/BookMochkup.png";
import Ebook2 from "../../../assets/Mocks/BookMockup-2.webp";
import BonusEbook1 from "../../../assets/Mocks/bonus-ebook.png";
import BonusEbook1M from "../../../assets/Mocks/bonus-ebook-m.png";
import bonusBadge from "../../../assets/Mocks/bonus-badge.png";
import BonusEbook2 from "../../../assets/Mocks/BonusBook-2.webp";
import Author from "../../../assets/author.png";

import Noise from "../../../assets/Textures/nnnoise.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { ebook_features } from "./features";
import {
	Brain,
	CakeSlice,
	ChevronDown,
	Lightbulb,
	Salad,
	Search,
} from "lucide-react";

function Ebook() {
	React.useEffect(() => {
		Aos.init({ duration: 1000 });

		(function(w: any,d: Document,s: string,l: string,i: string){
			w[l]=w[l]||[];
			w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
			const f=d.getElementsByTagName(s)[0];
			const j=d.createElement(s) as HTMLScriptElement;
			const dl=l!='dataLayer'?'&l='+l:'';
			j.async=true;
			j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
			f.parentNode?.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-M7FNJJJ2');

		const accountInput = document.getElementById('accountID');
		const accountPageInput = document.getElementById('accountPageID');
		
		const accountValue = '3e138c52-9f98-11f0-bcec-b7a3e40d3b4f';
		const accountPageValue = '9f3230cc-a319-11f0-8442-b7ce71388dea';
		
		if (!accountInput) {
			const input1 = document.createElement('input');
			input1.type = 'hidden';
			input1.id = 'accountID';
			input1.value = accountValue;
			document.body.appendChild(input1);
		}
		
		if (!accountPageInput) {
			const input2 = document.createElement('input');
			input2.type = 'hidden';
			input2.id = 'accountPageID';
			input2.value = accountPageValue;
			document.body.appendChild(input2);
		}
	}, []);

	const [isVisible, setIsVisible] = React.useState(false);
	const ref = React.useRef();

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				rootMargin: "0px",
				threshold: 0.1,
			},
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<>
			<section
				className="relative w-full bg-center bg-no-repeat bg-cover h-[67.5rem]"
				style={{ backgroundImage: `url(${GenteMalhando})` }}
			>
				<div className="flex relative flex-col gap-12 items-center p-8 pt-28 w-full h-full bg-gradient-to-r lg:px-64 backdrop-blur-[3px] from-[rgba(186,206,74,.9)] to-[rgba(126,217,86,.9)]">
					<span
						data-aos="fade-down"
						className="flex flex-col items-center w-full text-white"
					>
						{/* <Typography variant='h1' placeholder={''}>Evite o Efeito Sanfona </Typography> */}
						<Typography variant="h2" className="text-center" placeholder={""}>
							Descubra o segredo para <br className="hidden lg:flex" /> manter o
							peso e viver com saúde!
						</Typography>
					</span>

					<div
						data-aos="fade-down"
						data-aos-delay={200}
						className="lg:w-[45rem] lg:h-[25rem] h-[25%] w-full rounded-md shadow-lg"
					>
						<iframe
							width=""
							height=""
							src="https://www.youtube.com/embed/5fqQT2rx440?si=a1ZoHWHv3XtFBB_Q?autoplay"
							title="YouTube video player"
							frameborder="0"
							className="w-full h-full rounded-md"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>

					<Button
						data-aos="fade-down"
						data-aos-delay={400}
						placeholder={""}
						className="shadow-md lg:text-xl"
						color="green"
						size="lg"
						onClick={() =>
							window.open(
								"https://pay.hotmart.com/A102190532E?checkoutMode=10",
								"_blank",
							)
						}
					>
						Estou cansada(o) de viver voltando para meu peso antigo
					</Button>

					<div className="flex absolute bottom-0 -mb-1 w-full">
						<svg
							className="w-full h-[14vh] min-h-[100px] max-h-[250px]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 20 200 40"
							preserveAspectRatio="none"
							shapeRendering="auto"
						>
							<defs>
								<path
									id="gentle-wave"
									d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
								/>
							</defs>
							<g className="parallax">
								<use
									data-aos="fade-up"
									data-aos-delay={100}
									href="#gentle-wave"
									x="10"
									y="-6"
									fill="rgba(255,255,255,0.8)"
								/>
								<use
									data-aos="fade-up"
									data-aos-delay={300}
									href="#gentle-wave"
									x="55"
									y="1"
									fill="rgba(255,255,255,0.6)"
								/>
								<use
									data-aos="fade-up"
									data-aos-delay={500}
									href="#gentle-wave"
									x="42"
									y="4"
									fill="rgba(255,255,255,0.2)"
								/>
								<use
									data-aos="fade-up"
									data-aos-delay={700}
									href="#gentle-wave"
									x="12"
									y="10"
									fill="#fff"
								/>
							</g>
						</svg>
					</div>
				</div>
			</section>

			<section className="w-screen h-fit lg:h-[93%] bg-white -mt-1 grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 lg:px-64 py-12">
				<div className="flex overflow-hidden flex-col gap-6 justify-center items-center w-full h-full">
					<Typography placeholder={""} data-aos="fade-right" variant="h2">
						Apoio para uma Vida Saudável e Sustentável
					</Typography>

					<Typography
						className=""
						variant="lead"
						placeholder={""}
						data-aos="fade-right"
						data-aos-delay={200}
					>
						Alcançar o objetivo de perda de peso é uma vitória significativa,
						mas manter esse sucesso a longo prazo é um desafio maior. Nos
						comprometemos a apoiar você em sua jornada para um estilo de vida
						saudável e sustentável, reconhecendo as dificuldades de manter o
						peso ideal.
					</Typography>

					<Typography
						className=""
						variant="lead"
						placeholder={""}
						data-aos="fade-right"
						data-aos-delay={200}
					>
						A chave para a manutenção do peso é adotar hábitos sustentáveis, em
						vez de se render a dietas extremas que prometem resultados rápidos.
						Promovemos uma mudança gradual e realista nos hábitos alimentares e
						de estilo de vida, focando na saúde a longo prazo e na prevenção do
						efeito sanfona.
					</Typography>

					<Button
						className=""
						size="lg"
						placeholder={""}
						color="green"
						fullWidth
						data-aos="fade-right"
						data-aos-delay={400}
						onClick={() =>
							window.open(
								"https://pay.hotmart.com/A102190532E?checkoutMode=10",
								"_blank",
							)
						}
					>
						Quero uma vida saudável
					</Button>
				</div>

				<div className="flex flex-col justify-center items-center w-full h-full">
					<img
						src={MulherComendo}
						alt="mulher se alimentando bem"
						className="rounded-lg saturate-[120%]"
					/>
				</div>
			</section>

			<section className="w-screen min-h-screen lg:h-[85vh]">
				<div className="flex relative flex-col justify-center items-center p-8 pt-32 pb-12 w-full h-full lg:pt-64 backdrop-blur-[3px] bg-[rgba(125,217,86)]">
					<div className="flex absolute top-0 -mt-1 w-full">
						<svg
							className="w-full rotate-180 h-[14vh] min-h-[100px] max-h-[250px]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 20 200 40"
							preserveAspectRatio="none"
							shapeRendering="auto"
						>
							<defs>
								<path
									id="gentle-wave"
									d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
								/>
							</defs>
							<g className="parallax">
								<use
									href="#gentle-wave"
									x="10"
									y="-6"
									fill="rgba(255,255,255,0.8)"
								/>
								<use
									href="#gentle-wave"
									x="55"
									y="1"
									fill="rgba(255,255,255,0.6)"
								/>
								<use
									href="#gentle-wave"
									x="42"
									y="4"
									fill="rgba(255,255,255,0.2)"
								/>
								<use href="#gentle-wave" x="12" y="10" fill="#fff" />
							</g>
						</svg>
					</div>

					<div className="grid grid-cols-1 gap-12 w-full lg:grid-cols-2 lg:pt-0 pt-[4rem]">
						<div className="flex mx-auto w-full h-full lg:justify-end lg:items-end">
							<img
								src={Ebook1}
								alt="Ebook como manter o peso perdido"
								className="object-cover object-center lg:ml-2 w-[70%] mx-auto lg:mx-0 lg:w-[min(30rem,100%)]"
								data-aos="fade-up"
							/>
						</div>

						<div
							className="flex flex-col gap-6 justify-center w-full h-full lg:pr-24 lg:pb-12 overflow-clip"
							data-aos="fade-up"
							data-aos-delay={200}
						>
							<span>
								<Typography
									className="font-bold text-center text-white lg:text-start"
									variant="lead"
									placeholder={""}
									color="black"
								>
									Encontre a chave para uma vida saudável
								</Typography>

								<Typography
									className="text-5xl text-center text-white lg:text-start leading-[100%]"
									variant="h2"
									placeholder={""}
								>
									Como Manter o Peso Perdido
								</Typography>
							</span>

							<Typography
								placeholder={""}
								variant="paragraph"
								className="text-xl text-center lg:text-2xl lg:text-start"
								color="white"
							>
								Enquanto você embarca nesta jornada emocionante de manter o peso
								perdido, nada é mais valioso do que ter as ferramentas certas ao
								seu alcance.
							</Typography>

							<div>
								<Button
									className=""
									size="lg"
									placeholder={""}
									color="white"
									fullWidth
									data-aos="fade-right"
									data-aos-delay={400}
									onClick={() =>
										window.open(
											"https://pay.hotmart.com/A102190532E?checkoutMode=10",
											"_blank",
										)
									}
								>
									Quero Manter o Peso Perdido
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className="relative -mt-1 w-screen bg-white h-fit"
				style={{ backgroundImage: `url(${GenteNoCampo})` }}
			>
				<div className="flex absolute top-0 z-50 -mt-1 w-full">
					<svg
						className="w-full rotate-180 h-[14vh] min-h-[100px] max-h-[250px]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 20 200 40"
						preserveAspectRatio="none"
						shapeRendering="auto"
					>
						<defs>
							<path
								id="gentle-wave"
								d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
							/>
						</defs>
						<g className="parallax">
							<use
								href="#gentle-wave"
								x="10"
								y="-6"
								fill="rgba(125,217,86,0.8)"
							/>
							<use
								href="#gentle-wave"
								x="55"
								y="1"
								fill="rgba(125,217,86,0.6)"
							/>
							<use
								href="#gentle-wave"
								x="42"
								y="4"
								fill="rgba(125,217,86,0.2)"
							/>
							<use href="#gentle-wave" x="12" y="10" fill="rgba(125,217,86)" />
						</g>
					</svg>
				</div>

				<div className="flex flex-col gap-12 justify-center items-center px-8 pt-56 pb-40 w-full h-full lg:px-52 bg-white/80 backdrop-blur-[10px]">
					<div>
						<Typography variant="h2" className="text-blue-gray-900">
							Sobre o Autor
						</Typography>
					</div>

					<div className="flex flex-col justify-between items-center lg:flex-row min-w-lg gap-[1rem]">
						<img
							src={Author}
							alt=""
							className="w-[min(35rem,100%)] rounded-[1rem]"
						/>

						<div className="w-full bg-white border border-gray-300 lg:w-auto p-[1rem] rounded-[.75rem]">
							<Typography variant="paragraph" className="text-xl">
								Professor Chikão Freitas
								<br />
								Nutricionista - CRN6 13190
								<br />
								Preparador Físico - CREF 000765-G
								<br />
								Fisiologista do Exercício
								<br />
								Especialista em Nutrição Esportiva
								<br />
								Mestre em Desempenho Humano
								<br />
								Docente de Pós Graduação
								<br />+ de 15 mil pacientes atendidos
							</Typography>
						</div>
					</div>
				</div>

				<div className="flex absolute bottom-0 justify-center items-center -mb-1 w-full bg-gradient-to-b bg- h-[5rem] from-[rgba(255,255,255,0)] to-[#fafafa]">
					<div className="flex rounded-full border-4 border-[rgba(125,217,86)] h-[3rem] w-[3rem]">
						<ChevronDown
							size={40}
							className="animate-bounce text-[rgba(125,217,86)]"
						/>
					</div>
				</div>
			</section>

			<section className="relative grid-cols-1 gap-4 justify-center items-center py-12 w-screen lg:grid-cols-2 lg:px-64 min-h-[30rem] px-[1rem] bg-[#fafafa]">
				<div className="flex flex-col gap-4 justify-center w-full h-full pb-[2rem] lg:w-[min(50rem,100%)]">
					<Typography className="text-center lg:text-start" variant="h2">
						Bônus exclusivo
					</Typography>

					<div className="lg:hidden pt-[3rem] pb-[3rem]">
						<img
							className=""
							src={BonusEbook1M}
							alt="ebook saladas e molhos"
							style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }}
							data-aos="fade-up"
							data-aos-duration="1090"
						/>
					</div>

					<Typography className="text-blue-gray-600">
						Na compra do ebook{" "}
						<b className="font-bold">Como Manter O Peso Perdido</b> você garante
						dois ebook que irão de ajudar na jornada para um vida saudável Bônus
						Exclusivo Você não vai adquirir apenas um e-book, vai levar o
						segredo para transformar sua rotina em uma jornada de saúde e
						prazer!
						<br />
						<br />
						Com a compra do e-book{" "}
						<b className="font-bold">Como Manter o Peso Perdido</b>", você
						recebe um bônus exclusivo que te guiará nos primeiros 30 dias com:
						<br />
						<br />
						<div className="grid grid-cols-1 gap-6 my-2 md:grid-cols-2">
							<div className="p-6 bg-gradient-to-br rounded-xl border-2 transition-all duration-300 hover:shadow-lg from-[#7ED956]/10 to-[#b9fa9e]/20 border-[#7ED956]/30 hover:border-[#7ED956]">
								<div className="flex gap-4 items-start">
									<div className="flex-shrink-0 p-3 rounded-full bg-[#7ED956]">
										<Search className="w-6 h-6 text-white" />
									</div>
									<div>
										<h3 className="mb-2 text-xl font-bold text-gray-800">
											Planner de 30 dias
										</h3>
										<p className="text-gray-600">
											Um guia prático para criar hábitos saudáveis de forma
											consistente, sem complicação.
										</p>
									</div>
								</div>
							</div>

							<div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-300 transition-all duration-300 hover:border-blue-400 hover:shadow-lg">
								<div className="flex gap-4 items-start">
									<div className="flex-shrink-0 p-3 bg-blue-500 rounded-full">
										<CakeSlice className="w-6 h-6 text-white" />
									</div>
									<div>
										<h3 className="mb-2 text-xl font-bold text-gray-800">
											Receitas de sobremesas saudáveis
										</h3>
										<p className="text-gray-600">
											Descubra como desfrutar de doces deliciosos sem sair da
											sua jornada de bem-estar.
										</p>
									</div>
								</div>
							</div>
						</div>
						<br />
						<br />
						Garanta seu acesso imediato a esses bônus e comece agora mesmo a
						construir um estilo de vida que você ama!
					</Typography>

					<Button
						className="w-full"
						color="green"
						size="lg"
						onClick={() =>
							window.open(
								"https://pay.hotmart.com/A102190532E?checkoutMode=10",
								"_blank",
							)
						}
					>
						Garantir Bônus
					</Button>
				</div>

				<div className="hidden flex-col justify-center items-center w-full h-full lg:flex pb-[2rem]">
					<div
						ref={ref}
						className={`w-[40rem] lg:flex hidden h-[40rem] from-[rgba(125,217,86)] to-[#b9fa9e] right-96 top-0 bg-gradient-to-t absolute rounded-md shadow-xl ${
							isVisible ? "animate-moveAndRotate" : ""
						}`}
					>
						<img src={Noise} alt="just a noise" className="" />
					</div>

					<img
						className="absolute right-[15%] top-[35%] h-[25rem] lg:h-[20rem] z-[99]"
						src={bonusBadge}
						alt="ebook saladas e molhos"
						style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }}
						data-aos="fade-up"
						data-aos-duration="1090"
					/>
					<img
						className="absolute top-[10%] right-10 h-[25rem] lg:h-[40rem]"
						src={BonusEbook1}
						alt="ebook saladas e molhos"
						style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }}
						data-aos="fade-up"
						data-aos-duration="1000"
					/>
				</div>
			</section>

			<section className="grid relative grid-cols-1 gap-6 px-4 pt-32 pb-12 -mt-16 w-screen lg:grid-cols-2 lg:px-64 lg:pt-44 lg:-mt-1 lg:h-screen h-fit bg-[rgba(125,217,86)]">
				<div className="flex absolute top-0 -mt-1 w-full">
					<svg
						className="w-full rotate-180 h-[14vh] min-h-[100px] max-h-[250px]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 20 200 40"
						preserveAspectRatio="none"
						shapeRendering="auto"
					>
						<defs>
							<path
								id="gentle-wave"
								d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
							/>
						</defs>
						<g className="parallax">
							<use
								href="#gentle-wave"
								x="10"
								y="-6"
								fill="rgba(250,250,250,0.8)"
							/>
							<use
								href="#gentle-wave"
								x="55"
								y="1"
								fill="rgba(250,250,250,0.6)"
							/>
							<use
								href="#gentle-wave"
								x="42"
								y="4"
								fill="rgba(250,250,250,0.2)"
							/>
							<use href="#gentle-wave" x="12" y="10" fill="#fafafa" />
						</g>
					</svg>
				</div>

				<div className="flex flex-col-reverse gap-12 lg:flex-row lg:col-span-2">
					<div className="flex justify-end items-center w-full h-full">
						<Card className="bg-white/90 lg:max-w-[85%] shadow-2xl">
							<CardHeader
								className="flex overflow-hidden relative flex-col items-center p-8 text-white"
								color="green"
								variant="gradient"
								data-aos="fade-down"
							>
								<div className="absolute top-4 right-4 py-2 px-4 text-sm font-bold bg-white rounded-full shadow-lg animate-pulse text-[#7ED956]">
									OFERTA ESPECIAL
								</div>

								<Typography variant="lead" className="text-2xl text-white/80">
									De R$ <b className="text-3xl line-through">189,99</b>
								</Typography>
								<span className="flex flex-col justify-center items-center w-full">
									<Typography className="mb-2 text-2xl font-bold">
										LIVRO + BÔNUS
									</Typography>
									<Typography className="text-xl">Por apenas</Typography>
									<span className="flex gap-2 items-end py-3 px-6 my-2 rounded-xl bg-white/20 backdrop-blur-sm">
										<Typography className="text-3xl font-bold" variant="lead">
											R$
										</Typography>
										<Typography
											className="text-7xl font-bold leading-none"
											variant="h1"
										>
											19
										</Typography>
										<Typography className="text-3xl font-bold" variant="lead">
											,90
										</Typography>
									</span>
								</span>
							</CardHeader>
							<CardBody>
								<Typography className="" variant="lead">
									Garanta agora esta oferta imperdível e aprenda de uma vez por
									todas a manter o peso perdido com o bônus exclusivo:
								</Typography>

								<div className="grid grid-cols-1 gap-4 mt-6">
									<div className="p-4 bg-gradient-to-r rounded-lg border-l-4 from-[#7ED956]/20 to-[#b9fa9e]/30 border-[#7ED956]">
										<div className="flex gap-3 items-center">
											<div className="flex-shrink-0 p-2 rounded-full bg-[#7ED956]">
												<Search className="w-5 h-5 text-white" />
											</div>
											<div>
												<p className="font-bold text-gray-800">
													Planner de 30 dias
												</p>
												<p className="text-sm text-gray-600">
													Um guia prático para criar hábitos saudáveis
												</p>
											</div>
										</div>
									</div>

									<div className="p-4 bg-gradient-to-r rounded-lg border-l-4 border-blue-400 from-blue-100/50 to-blue-200/50">
										<div className="flex gap-3 items-center">
											<div className="flex-shrink-0 p-2 bg-blue-500 rounded-full">
												<CakeSlice className="w-5 h-5 text-white" />
											</div>
											<div>
												<p className="font-bold text-gray-800">
													Receitas de sobremesas saudáveis
												</p>
												<p className="text-sm text-gray-600">
													Emagrecendo com prazer
												</p>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
							<CardFooter>
								<Button
									onClick={() =>
										window.open(
											"https://pay.hotmart.com/A102190532E?checkoutMode=10",
											"_blank",
										)
									}
									className=""
									fullWidth
									size="lg"
									color="green"
									variant="gradient"
								>
									Garanta agora
								</Button>
							</CardFooter>
						</Card>
					</div>
					<div className="flex justify-center items-center w-full h-full">
						<img
							src={Ebook1}
							alt="Ebook como manter o peso perdido"
							className="object-cover mx-auto -ml-4 lg:ml-0 h-[22rem] lg:h-[40rem]"
							data-aos="fade-up"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export { Ebook };
