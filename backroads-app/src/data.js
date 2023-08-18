
import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
    {id:1, href: '#home', text:'home'},
    {id:2, href: '#about', text:'about'},
    {id:3, href: '#services', text:'services'},
    {id:4, href: '#tours', text:'Tours'}
];

export const socialLinks = [
    {id:1, href:'https://www.facebook.com', icon:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon:'fab fa-twitter'},
    {id:3, href:'https://www.squarespace.com', icon:'fab fa-squarespace'}
]

export const services = [
    {id:1,icon:'fas fa-wallet fa-fw',title:'saving money',text:'saving money decription'},
    {id:2,icon:'fas fa-tree fa-fw',title:'Endless hiking',text:'endless hiking decription'},
    {id:3,icon:'fas fa-socks fa-fw',title:'Amazing comfort',text:'amazing comfort decription'}
]

export const tours= [
    {id:1,image:tour1,date:'August 26th, 2020',title:'Tibet adventure',text:'About tibet',location:'China',duraiton:'6 days',cost:'$2100'},
    {id:2,image:tour2,date:'October 1th, 2020',title:'Best of java',text:'About java',location:'Indonesia',duraiton:'11 days',cost:'$1400'},
    {id:3,image:tour3,date:'September 15th, 2020',title:'Explore hong-kong',text:'About hong-kong',location:'Hong-Kong',duraiton:'8 days',cost:'$5000'},
    {id:4,image:tour4,date:'December 5th, 2019',title:'Kenya',text:'About Kenya',location:'Kenya',duraiton:'20 days',cost:'$3300'}
]

