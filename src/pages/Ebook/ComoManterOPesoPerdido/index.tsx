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

import Ebook1 from "../../../assets/Mocks/BookMockup-1.webp";
import Ebook2 from "../../../assets/Mocks/BookMockup-2.webp";
import BonusEbook1 from "../../../assets/Mocks/BonusBook-1.webp";
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
				className="relative w-screen h-screen bg-center bg-no-repeat bg-cover"
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
							className="w-full h-full rounded-md"
							src="https://www.youtube.com/watch?v=tUt0F3cTT2M?autoplay=1&mute=1"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
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

			<section className="w-screen h-screen lg:h-[85vh]">
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

					<div className="grid grid-cols-1 gap-12 w-full lg:grid-cols-2">
						<div className="flex w-full h-full lg:justify-end lg:items-end">
							<img
								src={Ebook1}
								alt="Ebook como manter o peso perdido"
								className="object-cover object-center ml-2 h-[20rem] lg:h-[40rem]"
								data-aos="fade-up"
							/>
						</div>

						<div
							className="flex overflow-hidden flex-col gap-6 justify-center w-full h-full lg:pr-24 lg:pb-12"
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
									Encontre a chave para uma vida saudável com nosso ebook
									exclusivo
								</Typography>

								<Typography
									className="text-white"
									variant="h2"
									placeholder={""}
								>
									Como Manter o Peso Perdido
								</Typography>
							</span>

							<Typography
								placeholder={""}
								variant="paragraph"
								className="text-2xl text-center text-justify lg:text-start"
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

					<div className="flex justify-between items-center min-w-lg">
						<img
							src={Author}
							alt=""
							className="w-[min(35rem,100%)] rounded-[1rem]"
						/>

						<div className="bg-white border border-gray-300 p-[1rem] rounded-[.75rem]">
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

			<section className="hidden relative grid-cols-2 gap-4 justify-center items-center py-12 px-64 w-screen h-screen lg:grid bg-[#fafafa]">
				<div className="flex flex-col gap-4 justify-center w-full h-full">
					<Typography className="" variant="h2">
						Bônus exclusivo
					</Typography>

					<Typography className="text-blue-gray-600">
						Na compra do ebook{" "}
						<b className="font-bold">Como Manter O Peso Perdido</b> você garante
						dois ebook que irão de ajudar na jornada para um vida saudável
					</Typography>

					<Card className="bg-white">
						<div className="flex flex-col gap-2 p-4">
							<span className="flex gap-2">
								<div className="flex justify-center items-center text-white bg-green-300 rounded-lg h-[3rem] w-[3rem]">
									<Salad />
								</div>
								<div>
									<Typography variant="lead" className="font-bold">
										Receitas Criativas de Saladas e Molhos
									</Typography>
									<Typography variant="small" className="-mt-1">
										mais cor e sabor nas suas refeições
									</Typography>
								</div>
							</span>
							<Typography className="leading-5" variant="paragraph">
								Mergulhe em receitas deliciosas que combinam o prazer de comer
								doces com a manutenção de um estilo de vida saudável. Desfrute
								de sobremesas que satisfazem seu paladar sem comprometer seus
								objetivos de saúde.
							</Typography>
						</div>
					</Card>

					<Card className="bg-white">
						<div className="flex flex-col gap-2 p-4">
							<span className="flex gap-2">
								<div className="flex justify-center items-center text-white bg-red-300 rounded-lg h-[3rem] w-[3rem]">
									<CakeSlice />
								</div>
								<div>
									<Typography variant="lead" className="font-bold">
										Sobremesas Saudáveis
									</Typography>
									<Typography variant="small" className="-mt-1">
										Emagrecendo com prazer
									</Typography>
								</div>
							</span>
							<Typography className="leading-5" variant="paragraph">
								Mergulhe em receitas deliciosas que combinam o prazer de comer
								doces com a manutenção de um estilo de vida saudável. Desfrute
								de sobremesas que satisfazem seu paladar sem comprometer seus
								objetivos de saúde.
							</Typography>
						</div>
					</Card>

					<Button className="" color="green" size="lg">
						Garantir Bônus
					</Button>
				</div>

				<div className="flex flex-col justify-center items-center w-full h-full">
					<div
						ref={ref}
						className={`w-[40rem] lg:flex hidden h-[40rem] from-[rgba(125,217,86)] to-[#b9fa9e] right-96 bg-gradient-to-t absolute rounded-md shadow-xl ${
							isVisible ? "animate-moveAndRotate" : ""
						}`}
					>
						<img src={Noise} alt="just a noise" className="" />
					</div>

					<img
						className="absolute top-8 right-10 h-[25rem] lg:h-[35rem]"
						src={BonusEbook2}
						alt="ebook saladas e molhos"
						style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }}
						data-aos="fade-up"
						data-aos-duration="1000"
					/>

					<img
						className="absolute right-72 h-[25rem] lg:h-[28rem]"
						src={BonusEbook1}
						alt="ebook sobremesas"
						style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }}
						data-aos="fade-up"
						data-aos-duration="1200"
						data-aos-delay={200}
					/>
				</div>

				{/* <div className='flex absolute bottom-0 justify-center items-center -mb-1 w-full bg-gradient-to-b bg- h-[5rem] from-[rgba(255,255,255)] to-[rgba(125,217,86)]'>
   
                </div> */}
			</section>

			<section className="flex flex-col grid-rows-3 py-12 h-screen lg:hidden w-scrren bg-[#fafafa]">
				<Typography className="ml-4" variant="h2">
					Bônus exclusivo
				</Typography>

				<div className="flex overflow-hidden relative flex-col pl-4 -mt-12 w-full h-[25rem]">
					<div className="flex items-center w-full h-[25rem]">
						<div className="w-[55%]" data-aos="fade-left" data-aos-delay={200}>
							<Typography variant="lead" className="">
								Desfrute de sobremesas que satisfazem seu paladar sem
								comprometer seus objetivos de saúde.
							</Typography>
						</div>
						<img
							src={BonusEbook2}
							alt="ebook saladas e molhos"
							className="absolute -right-20 h-[20rem] lg:h-[35rem]"
							style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }}
							data-aos="fade-left"
							data-aos-duration="1000"
						/>
					</div>
				</div>

				<div className="flex overflow-hidden relative flex-col pr-4 -mt-28 w-full h-[25rem]">
					<div className="flex justify-end items-center w-full h-[25rem]">
						<img
							src={BonusEbook1}
							alt="ebook sobremesas"
							className="absolute -left-16 h-[18rem]"
							style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }}
							data-aos="fade-right"
							data-aos-delay={400}
							data-aos-duration="1000"
						/>
						<div className="w-[55%]" data-aos="fade-right" data-aos-delay={600}>
							<Typography variant="lead" className="text-right">
								Cada receita é projetada para trazer novos sabores e cores à sua
								mesa, mantendo você no caminho certo para um estilo de vida
								saudável e vibrante.
							</Typography>
						</div>
					</div>
				</div>

				<Button className="mx-4" size="lg" color="green">
					Garantir bônus!
				</Button>
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
						<Card className="bg-white/90 lg:max-w-[85%]">
							<CardHeader
								className="flex flex-col items-center p-8 text-white"
								color="green"
								variant="gradient"
								data-aos="fade-down"
							>
								<Typography variant="lead" className="text-2xl text-white/80">
									De R$ <b className="text-3xl line-through">189,99</b>
								</Typography>
								<span className="flex flex-col justify-center items-center w-full">
									<Typography className="text-xl">Por apenas 12x de</Typography>
									<span className="flex gap-2 items-end">
										<Typography className="" variant="lead">
											R$
										</Typography>
										<Typography className="" variant="h1">
											9,91
										</Typography>
									</span>
									<Typography className="text-xl">
										OU À VISTA POR
										<b className="text-2xl font-bold"> R$ 97,00</b>
									</Typography>
								</span>
								{/* <Typography variant='lead'>12x de R$<b className='text-4xl line-through'> 9,91</b></Typography> */}
							</CardHeader>
							<CardBody>
								<Typography className="" variant="lead">
									Levando agora, você garante os dois ebooks que te ajudação na
									jornada de <b className="font-bold">manter o peso perdido</b>:
								</Typography>
								<div className="flex overflow-hidden flex-col gap-4 mt-4">
									<span
										className="flex gap-4 items-center"
										data-aos="slide-right"
									>
										<div className="flex justify-center items-center text-white bg-green-300 rounded-lg h-[3rem] w-[3rem]">
											<Salad />
										</div>
										<div className="w-[80%]">
											<Typography variant="lead" className="">
												Receitas Criativas de Saladas e Molhos
											</Typography>
											<Typography variant="small">
												mais cor e sabor nas suas refeições
											</Typography>
										</div>
									</span>
									<span
										className="flex gap-4 items-center"
										data-aos="slide-right"
										data-aos-delay={400}
									>
										<div className="flex justify-center items-center text-white bg-red-300 rounded-lg h-[3rem] w-[3rem]">
											<CakeSlice />
										</div>
										<div>
											<Typography variant="lead">
												Sobremesas Saudáveis
											</Typography>
											<Typography variant="small">
												Emagrecendo com prazer
											</Typography>
										</div>
									</span>
								</div>
							</CardBody>
							<CardFooter>
								<Button
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
					<div className="w-full h-full">
						<img
							src={Ebook2}
							alt="Ebook como manter o peso perdido"
							className="object-cover object-center -ml-4 h-[22rem] lg:h-[40rem]"
							data-aos="fade-up"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export { Ebook };
