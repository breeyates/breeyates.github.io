export interface WorkOptions {
    company: string;
    positions: {
        title: string;
        description: string;
    }[];
    images: string[];
    imageWidth?: string;
    imageSx?: React.CSSProperties;
}

export const work: WorkOptions[] = [
    {
        company: 'Flexgen Power Systems',
        positions: [
            {
              title: 'Full Stack Software Engineer',
              description: 'Led the development of a data visualization tool that enables customers to quickly access and visualize the data they need, significantly reducing dependency on internal support teams. Worked closely with design and product teams to implement best user experience practices resulting in a cohesive and responsive UI. Participated in design and architecture meetings, translating early-stage concepts into fully functional features. Led technical interviews for intern candidates. Provided mentorship and onboarding support to new hires.',
            },
            {
                title: 'Associate Full Stack Software Engineer',
                description: 'Developed UI using Typescript, React, and NextJS for a seamless user experience. Engineered backend solutions using NestJS, and PostgreSQL, creating scalable and efficient server-side functionality. Contributed to the development and integration of a reusable component library, including the creation of 20+ components, optimizing development processes, and reducing time-to-market- for new features.',
            },
        ],
        images: ["/flexgen/home.png", "/flexgen/monitoring.png"],
        imageSx: { height: '400px' },
        imageWidth: '700px',
    },
    {
        company: 'Freelance',
        positions: [    
            {
              title: 'Graphic Designer / Video Editor',
              description: 'I’ve often debated whether to include my previous design experience on my development resume, but I’ve ultimately decided to highlight it—because it’s a big part of who I am. My years of working in design have shaped the way I approach front-end development. They’ve sharpened my eye for UI/UX and given me a deeper understanding of what makes an interface not just functional, but delightful. I love front-end development because it blends logic with creativity—it is design. My design work includes motion graphics, YouTube thumbnails, streaming packages, montage editing, and social media headers.',
            },
        ],
        imageSx: { height: '300px' },
        images: ["/freelance/league_stars.png", "/freelance/alicopter_vs_ioki.png", "/freelance/guantlet_teaser.png", "/freelance/akali_2v2.png"],
    },
    {
        company: 'Niner Esports',
        positions: [    
            {
              title: 'Graphic Designer / Vice President',
              description: "During my time at UNC Charlotte, I was part of the eSports club, where I served as both the League of Legends Coordinator and Vice President. These roles provided me with valuable leadership experience and the opportunity to organize large-scale events for the university's gaming community. I also had the chance to support my classmates in nationwide tournaments. Additionally, I contributed to the club’s visual presence by creating tournament advertisements and social media graphics.",
            },
        ],
        imageSx: { height: '300px' },
        images: ["/niner_esports/slight_fuss.png", "/niner_esports/5v5.png", "/niner_esports/banner.png"],
    },
];