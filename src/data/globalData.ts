import photo1 from '../assets/photos/photo-1.jpg';
import photo2 from '../assets/photos/photo-2.jpg';
import photo3 from '../assets/photos/photo-3.jpg';

import enzo from '../assets/photos/patients/enzo.jpg';
import diogo from '../assets/photos/patients/diogo.jpg';
import jose from '../assets/photos/patients/jose-litierio.jpg';
import matheus from '../assets/photos/patients/matheus.jpg';
import mozart from '../assets/photos/patients/mozart.jpg';
import maria from '../assets/photos/patients/naria_cle.jpg';
import vitor from '../assets/photos/patients/vitor.png';

export const services = [
    {
        photo: photo1,
        title: 'Consulta Única',
        content: 'O paciente recebe o atendimento presencial ou online, de acordo com o pacote escolhido e o acompanhamento pós-consulta é feito todo pelo aplicativo onde serão disponibilizados os planos alimentares e a prescrição de treino para quem optar pelo pacote completo.'
    },
    {
        photo: photo2,
        title: 'Trimestral',
        content: 'São 3 consultas durante 3 meses além do acompanhamento pelo aplicativo. O paciente terá sua evolução monitorada e os ajustes serão feitos durante esse período, tanto na dieta quando no treino para quem fechar pacote completo. É uma excelente opção para quem tem um objetivo e deseja ser orientado e monitorado de perto.'
    },
    {
        photo: photo3,
        title: 'Semestral',
        content: 'Ideal para quem deseja emagrecer definitivamente através da mudança de hábitos, assim como para o paciente que busca evoluir nos treinos e na composição corporal. Acompanhamento por 6 meses com um encontro por mês além de todo o suporte via app. Paciente e profissional assumem um compromisso mútuo no processo de mudança e de evolução na busca do objetivo desejado.'
    },

];

export const testimonials = [
    {
        feedback: 'Excelente profissional, muito competente e se adequa as necessidades do paciente sem fazer propostas de dieta irreal.',
        client: 'Enzo Lopes',
        title: 'Paciente',
        img: enzo,
    },
    {
        feedback: 'Super recomendo, excelente profissional. Pontual, prestativo, atencioso. Elaborou o meu programa de treino físico e nutricional de acordo com as minhas necessidades. me acompanha diariamente pelo programa e sempre responde rápido as duvidas no aplicativo ou no WhatsApp. Se você busca um profissional bem qualificado que preza pela sua saúde e bem estar esse é o cara!',
        client: 'Matheus Felipe',
        title: 'Atleta',
        img: matheus,
    },
    {
        feedback: 'Fiquei super satisfeita com sua atenção e profissionalismo. Uma consulta explicativa onde foi tirada todas as minhas dúvida.',
        client: 'Maria Clenúbia',
        title: 'Paciente',
        img: maria,
    },
    {
        feedback: 'Profissional sensacional. Consulta completa e repleta de informações. Estou satisfeito, agora seguir o recomendado para ver resultados. Parabéns Dr. Francisco!',
        client: 'José Litério',
        title: 'Paciente',
        img: jose,
    },
    {
        feedback: 'Excelente consulta. Porfisional pontual. Consulta completíssima que envolveu avaliação por pregas, balança de bioimpedância, exame de calorimetria e anamnese completa. Agora é seguir a dieta e os treinos indicados e acompanhar os resultados.',
        client: 'Mozart de Albuquerque',
        title: 'Paciente',
        img: mozart,
    },
    {
        feedback: 'Excelente consulta. Porfisional pontual, Consulta completíssima que envolveu avaliação por pregas, balança de bioimpedância, exame de calorimetria e anamnese completa. Agora é seguir a dieta e os treinos indicados e acompanhar os resultados.',
        client: 'Diogo Henrique',
        title: 'Paciente',
        img: diogo,
    },
    {
        feedback: 'Chikão é um excelente profissional. Demonstra um conhecimento enorme da nutrição e atividades físicas, o qual também é formado.Recomendo a todos.',
        client: 'Vitor Lopes',
        title: 'Paciente',
        img: vitor,
    },
    
];

export const onlinePlans = [
    { 
        id: 1,
        size: 'md',
        colorType: 2,
        type: 'CLASSIC',
        period: 'Consulta Única',
        kind: 'Nutricional',
        price:  'R$ 350',
        text: 'NO PIX OU EM ATÉ 12X DE R$ 38,00',
        diferentials: [
            '1 video-call para consulta nutricional',
            '30 dias de acompanhamento',
            '1 check-in semanal para dúvidas',
            'Cardápio individualizado',
            'App com receitas e lista de compras',
        ]
    },
    { 
        id: 2,
        size: 'lg',
        colorType: 1,
        type: 'VIP',
        period: 'Trimestral',
        kind: 'Nutricional',
        price:  'R$ 850',
        text: 'NO PIX OU EM ATÉ12X DE R$ 92,00',
        diferentials: [
            '3 video-calls para consulta nutricional',
            '90 dias de acompanhamento',
            '1 check-in semanal para dúvidas',
            'Cardápio individualizado',
            'App com receitas e lista de compras',
        ]
    },
    { 
        id: 3,
        size: 'lg',
        colorType: 2,
        type: 'PREMIUM',
        period: 'Semestral',
        kind: 'Nutricional',
        price:  'R$ 1500',
        text: 'NO PIX OU EM ATÉ 12X DE R$ 162,00',
        diferentials: [
            '6 video-calls para consulta nutricional',
            '180 dias de acompanhamento',
            '1 check-in semanal para dúvidas',
            'Cardápio individualizado',
            'App com receiras e lista de compras',
        ]
    },    
    { 
        id: 4,
        size: 'md',
        colorType: 2,
        type: 'CLASSIC',
        period: 'Consulta Única',
        kind: 'Nutricional',
        price:  'R$ 450',
        text: 'NO PIX OU EM ATÉ 12X DE R$ 49,00',
        diferentials: [
            '1 video-call para consulta nutricional',
            '30 dias de acompanhamento',
            '1 check-in semanal para dúvidas',
            'Cardápio individualizado',
            'App com receitas e lista de compras',
            'Prescrição de Treino para 30 dias',
            'Treino no app com vídeo explicativo',
            'Treino individualizado para seu objetivo',
        ]
    },
    { 
        id: 5,
        size: 'lg',
        colorType: 1,
        type: 'VIP',
        period: 'Trimestral',
        kind: 'Nutricional',
        price:  'R$ 1150',
        text: 'NO PIX OU EM ATÉ12X DE R$ 124,00',
        diferentials: [
            '3 video-calls para consulta nutricional',
            '90 dias de acompanhamento',
            '1 check-in semanal para dúvidas',
            'Cardápio individualizado',
            'App com receitas e lista de compras',
            'Prescrição de Treino para 90 dias',
            'Treino no app com vídeo explicativo',
            'Treino individualizado para seu objetivo',
        ]
    },
    { 
        id: 6,
        size: 'lg',
        colorType: 2,
        type: 'PREMIUM',
        period: 'Semestral',
        kind: 'Nutricional',
        price:  'R$ 2100',
        text: 'NO PIX OU EM ATÉ 12X DE R$225,50',
        diferentials: [
            '6 video-calls para consulta nutricional',
            '180 dias de acompanhamento',
            '1 check-in semanal para dúvidas',
            'Cardápio individualizado',
            'App com receiras e lista de compras',
            'Prescrição de Treino para 180 dias',
            'Treino no app com vídeo explicativo',
            'Treino individualizado para seu objetivo',
        ]
    },
];
export const plans = [
    { 
        id: 1,
        size: 'md',
        colorType: 2,
        type: 'CLASSIC',
        period: 'Consulta Única',
        kind: 'Nutricional',
        price:  'R$ 400',
        text: 'NO PIX OU EM ATÉ 12X DE R$43,00',
        diferentials: [
            '1 consulta presencial',
            '30 dias de acompanhamento',
            'Chat para dúvidas no app',
            'Cardápio individualizado',
            'App com receitas e lista de compras',
            'Exame de Bioimpedância',
            'Exame de Calorimetria Indireta',
        ]
    },
    { 
        id: 2,
        size: 'lg',
        colorType: 1,
        type: 'VIP',
        period: 'Trimestral',
        kind: 'Nutricional',
        price:  'R$ 1000',
        text: 'NO PIX OU EM ATÉ12X DE R$108,00',
        diferentials: [
            '3 consultas presenciais',
            '90 dias de acompanhamento',
            'Chat para dúvidas no app',
            'Cardápio individualizado',
            'App com receitas e lista de compras',
            'Exame de Bioimpedância',
            'Exame de Calorimentria',
            'Monitoramento e controle de resultados',
        ]
    },
    { 
        id: 3,
        size: 'lg',
        colorType: 2,
        type: 'PREMIUM',
        period: 'Semestral',
        kind: 'Nutricional',
        price:  'R$ 1800',
        text: 'NO PIX OU EM ATÉ 12X DE R$194,00',
        diferentials: [
            '6 consultas presenciais',
            '180 dias de acompanhamento',
            'Chat para dúvidas no app',
            'Cardápio individualizado',
            'App com receiras e lista de compras',
            'Exame de Bioimpedância e Calorimentria',
            'Monitoramento e controle de resultaods',
        
        ]
    },    
    { 
        id: 4,
        size: 'md',
        colorType: 2,
        type: 'CLASSIC',
        period: 'Consulta Única',
        kind: 'Nutricional',
        price:  'R$ 500',
        text: 'NO PIX OU EM ATÉ 12X DE R$54,00',
        diferentials: [
            '1 consulta presencial',
            '30 dias de acompanhamento',
            'Chat para dúvidas no app',
            'Cardápio individualizado',
            'App com receitas e lista de compras',
            'Exame de Bioimpedância',
            'Exame de Calorimetria Indireta',
            'Prescrição de Treino para 30 dias',
            'Treino no app com vídeo explicativo',
            'Treino individualizado para seu objetivo',
        ]
    },
    { 
        id: 5,
        size: 'lg',
        colorType: 1,
        type: 'VIP',
        period: 'Trimestral',
        kind: 'Nutricional',
        price:  'R$ 1300',
        text: 'NO PIX OU EM ATÉ12X DE R$140,00',
        diferentials: [
            '3 consultas presenciais',
            '90 dias de acompanhamento',
            'Chat para dúvidas no app',
            'Cardápio individualizado',
            'App com receitas e lista de compras',
            'Exame de Bioimpedância',
            'Exame de Calorimentria',
            'Monitoramento e controle de resultados',
            'Prescrição de Treino para 90 dias',
            'Treino no App com vídeo explicativo',
            'Treino individualizado para seu objetivo',
        ]
    },
    { 
        id: 6,
        size: 'lg',
        colorType: 2,
        type: 'PREMIUM',
        period: 'Semestral',
        kind: 'Nutricional',
        price:  'R$ 2400',
        text: 'NO PIX OU EM ATÉ 12X DE R$200,00',
        diferentials: [
            '6 consultas presenciais',
            '180 dias de acompanhamento',
            'Chat para dúvidas no app',
            'Cardápio individualizado',
            'App com receiras e lista de compras',
            'Exame de Bioimpedância e Calorimentria',
            'Monitoramento e controle de resultaods',
            'Prescrição de Treinop para 180 dias',
            'Treino no app com vídeo explicativo',
            'Treino individualizado para seu objetivo',
        
        ]
    },
];