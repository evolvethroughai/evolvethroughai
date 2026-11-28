import { BrainCircuit, Compass, HeartHandshake, Lightbulb, MessageCircle, Mic2, Rocket, UsersRound } from 'lucide-react';
export const storyChapters = [
 ['The Struggle','Understanding the gap between theoretical knowledge, practical experience and professional confidence.'],
 ['The Realisation','Growth needs technical skills, direction, communication, analytical thinking and the right mindset.'],
 ['The Purpose','Helping people develop capabilities, overcome uncertainty and discover new professional possibilities.'],
 ['The Evolution','Connecting education with AI engineering, intelligent automation, digital solutions and business innovation.'],
 ['The Future','A community where people and businesses continuously learn, build and evolve together.'],
];
export const growthAreas = [
 {icon:Mic2,title:'Motivational Speaking & Inspiration',text:'Ideas that encourage people to take their next thoughtful step.'},
 {icon:UsersRound,title:'Corporate & Technology Workshops',text:'Explore engineering decisions, practical workflows and shared learning.'},
 {icon:Compass,title:'Career Mentoring & Professional Growth',text:'Connect your existing experience with a clearer direction.'},
 {icon:HeartHandshake,title:'Personal Development & Confidence',text:'Build confidence through practice, reflection and constructive feedback.'},
 {icon:MessageCircle,title:'Leadership & Communication',text:'Explain decisions clearly. Listen carefully. Work better together.'},
 {icon:Lightbulb,title:'Analytical Thinking & Problem Solving',text:'Ask better questions, investigate constraints and test your ideas.'},
 {icon:Rocket,title:'Business Growth & Entrepreneurship',text:'Start with a real need and turn it into a useful digital solution.'},
 {icon:BrainCircuit,title:'AI Engineering & Future-Ready Skills',text:'Connect practical engineering with responsible applications of AI.'},
];
// Publish only after the owner confirms the figure and its evidence.
export const achievements = [{value:200,label:'Professionals supported',verified:false}];
export const values = ['Continuous Learning','Practical Engineering','Human Growth','Integrity & Trust','Innovation','Collaboration','Meaningful Impact'];
export type CommunityReview = {name:string;role:string;quote:string;platform:string;url?:string;verified:boolean;permission:boolean;illustrative?:boolean};
export const communityReviews:CommunityReview[] = [];
// Opt-in development previews only. Never rendered in production.
export const illustrativeReviews:CommunityReview[] = [
 {name:'Rahul Sharma',role:'Solution Architect',platform:'Google',quote:'The practical approach helped me connect DevOps concepts with real engineering workflows.'},
 {name:'Priya Reddy',role:'Senior DevOps Engineer',platform:'LinkedIn',quote:'I gained a clearer direction for my career and understood which skills I needed to develop next.'},
 {name:'Sai Kiran',role:'Fresher Engineer',platform:'Instagram',quote:'The explanations made complex technologies easier to understand and gave me confidence to keep learning.'},
 {name:'Ananya Patel',role:'AI Engineer',platform:'LinkedIn',quote:'Learning how AI fits into existing engineering workflows changed the way I approach upskilling.'},
 {name:'Vikram Rao',role:'Cloud Engineer',platform:'Google',quote:'The focus on troubleshooting and real projects made the learning experience more meaningful.'},
 {name:'Sneha Gupta',role:'Software Engineer',platform:'Instagram',quote:'Working through practical examples helped me explain my technical decisions with more confidence.'},
].map(review=>({...review,verified:false,permission:false,illustrative:true}));
