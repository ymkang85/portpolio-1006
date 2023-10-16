const logotext = "WEIN'S";
const meta = {
    title: "강영민",
    description: "나 강영민이 리엑트 웹사이트를 공부하면서 만든 페이지다."
};
const introdata = {
    title: "Hi! I'm Kang",
    animated: {
        first: "두번째 프로젝트입니다.",
        second: "열심히 만들었습니다.",
        third: "노력과 결실로 보여드리겠습니다."
    },
    description: "경기 김포시 장기동에 위치한 이젠 컴퓨터 학원 8층 class5에서 풀스택 개발자 과정 공부중입니다. 이 과정은 2023년 7월 17일부터 12월 20일까지이며 80% 이상 출석을 하였을 경우 수료가 가능합니다. 감사합니다. ",
    img_url: "/images/character.png"
};
const portfoliodata = {
    title: "ymkang portfolio",
    description: "developer, react, nodejs, next, web and app"
}

const imgData = [
    {img: "111", category: 'hub', description: '카탄이라는 보드게임입니다.'},
    {img: "112", category: 'hub', description: '사그라다라는 보드게임입니다.'},
    {img: "113", category: 'hub', description: '센츄리라는 보드게임의  버전 1, 2, 3을 모두 합쳐서 하고 있습니다.'},
    {img: "114", category: 'hub', description: '센츄리라는 보드게임의  버전 1, 2를 합쳐서 하고 있습니다.'},
    {img: "115", category: 'hub', description: '777 큐브입니다. 맞추는데 30분정도 걸립니다.'},
    {img: "116", category: 'isl', description: '장소는 안면도에 있는 코리아 플라워파크이고, 내부에 있는 분수대입니다.'},
    {img: "117", category: 'isl', description: '장소는 안면도에 있는 코리아 플라워파크입니다. 나무로 세마리 곰을 장식한 작품입니다.'},
    {img: "118", category: 'isl', description: '장소는 안면도에 있는 코리아 플라워파크입니다. 나무로 두마리 토끼를 장식한 작품입니다.'},
    {img: "119", category: 'mau', description: '감악산 출렁다리입니다. 정면사진으로 작년 가을에 찍은 사진입니다.'},
    {img: "120", category: 'mau', description: '감악산 출렁다리입니다. 옆에서 찍은 사진입니다.'},
    {img: "121", category: 'mau', description: '감악산 정상 바로 전 사진입니다.'},
    {img: "122", category: 'mau', description: '감악산 정상석 사진입니다.'},
    {img: "123", category: 'mau', description: '감악산 하산길 사진입니다.'}
]; 

const dataabout = {
    title: 'Welcome, About by self',
    content: '안녕하세요? 반갑습니다. 이 웹 페이지는 현재 연습중인 페이지입니다.'
}
const mytimeline = [
    {
        jobtitle: "사회보장정보원 웹페이지 유지보수",
        where: "을지로",
        date: 2018
    },
    {
        jobtitle: "화상회의장비 설치 및 유지보수",
        where: "이천 하이닉스",
        date: 2017
    }, 
    {
        jobtitle: "보안 프로그램 설치 및 유지보수",
        where: "논현동",
        date: 2016
    } 
];
const myskills = [
    {
    name: "JavaScript",
    value: 99
    },
    {
        name: 'React',
        value: 75
    },
    {
        name: 'React Native',
        value: 90
    },
    {
        name: 'nodeJS',
        value: 60
    },
    {
        name: 'jQuery',
        value: 80
    }
];
const services = [
    {
        title: "UI & UX Design",
        description: "어울리는 색상을 최대한 활용하여 제작하였고, 애니메이션도 활용하여 제작하였습니다."
    },
    {
        title: "Mobile Apps",
        description: "현재는 지원이 원활하지는 않은 상태입니다."
    },
    {
        title: "Front & Back END",
        description: "react 및 router를 활용하여 제작을 진행하고 있습니다. "
    }
];

const contact_config = {
    ADMIN_EMAIL : "kangym855@gmail.com", 
    ADMIN_PHONE : "010-2264-8825",
    description : "매일 하루를 도전하자.",
    ADMIN_SERVICE_ID :  "service_jp0cklr",
    ADMIN_TEMPLATE_ID :  "template_ldf9zca",
    ADMIN_API :  "leZA6JWtsRHNnKt-6"
}

export {
    logotext,
    meta, 
    introdata,
    portfoliodata,
    imgData,
    dataabout,
    mytimeline,
    myskills,
    services,
    contact_config
}