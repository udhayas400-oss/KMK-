// Only About uses the original engineer photo. Other major services use distinct new generated assets.
export const aboutImage = '/kmk-consultation.jpg';
export const aboutImageAlt = 'Engineer wearing a white safety helmet and high-visibility vest reviewing construction plans';
const photos: Record<string, readonly [string,string]> = {
  "/about": [
    "/kmk-consultation.jpg",
    "Engineer wearing a white safety helmet and high-visibility vest reviewing construction plans"
  ],
  "/bizsafe": [
    "/service-photos/bizsafe-service.jpg",
    "Singapore industrial workplace safety briefing with diverse workers in PPE listening to a woman supervisor"
  ],
  "/bizsafe-level-1": [
    "/service-photos/bizsafe-level-1-service.jpg",
    "Singapore management team attending a workplace safety leadership presentation"
  ],
  "/bizsafe-level-2": [
    "/service-photos/bizsafe-level-2-service.jpg",
    "Practical risk-management training workshop around a workbench"
  ],
  "/bizsafe-level-3": [
    "/service-photos/bizsafe-level-3-service.jpg",
    "Female safety officer with clipboard inspecting machine guarding with a worker"
  ],
  "/bizsafe-level-4": [
    "/service-photos/bizsafe-level-4-service.jpg",
    "Management safety strategy meeting in a modern industrial office"
  ],
  "/bizsafe-star": [
    "/service-photos/bizsafe-star-service.jpg",
    "Professional auditors reviewing factory safety compliance with a staff guide"
  ],
  "/iso": [
    "/service-photos/iso-service.jpg",
    "Management-system consultants reviewing process documentation in a modern office"
  ],
  "/iso-9001": [
    "/service-photos/iso-9001-service.jpg",
    "Female quality inspector measuring a manufactured metal component with digital calipers"
  ],
  "/iso-14001": [
    "/service-photos/iso-14001-service.jpg",
    "Environmental engineer checking water monitoring instruments near landscaping and a solar-powered facility"
  ],
  "/iso-45001": [
    "/service-photos/iso-45001-service.jpg",
    "Red-helmet safety professional checking fall-protection equipment with workers"
  ],
  "/iso-22000": [
    "/service-photos/iso-22000-service.jpg",
    "Food hygiene inspector and production workers in hygienic uniforms checking food packaging"
  ],
  "/iso-27001": [
    "/service-photos/iso-27001-service.jpg",
    "Female cybersecurity analyst with laptop in a secure blue-lit server room"
  ],
  "/incorporation": [
    "/service-photos/incorporation-service.jpg",
    "Entrepreneurs reviewing corporate registration documents with a woman advisor"
  ],
  "/incorporation-meeting": [
    "/service-photos/incorporation-meeting-service.jpg",
    "Entrepreneur and accountant discussing company documentation at a glass desk"
  ],
  "/bca": [
    "/service-photos/bca-service.jpg",
    "Wide Singapore building project with cranes and a contractor team in the distance"
  ],
  "/pr-application": [
    "/service-photos/pr-application-service.jpg",
    "Singapore application consultation with a woman advisor and a couple, skyline background"
  ],
  "/contact": [
    "/service-photos/contact-service.jpg",
    "Friendly consultant speaking with a client in a contemporary office"
  ]
};
const illustrations: Record<string,string> = {
  "engineering": "Technical Consultancy",
  "risk-assessment": "Workplace Risk Review",
  "safety-documentation": "Safety Documentation",
  "audit-readiness": "Audit Preparation",
  "wsh-consultancy": "Workplace Safety Planning"
};
export function getServiceImage(route: string){
 const pathname = route.replace(/\/$/,'') || '/';
 const photo = photos[pathname];
 if(photo)return {src:photo[0],alt:photo[1]};
 const title = illustrations[pathname.slice(1)] || 'Technical Consultancy';
 return {src:'/service-visuals/'+(illustrations[pathname.slice(1)]?pathname.slice(1):'engineering')+'.svg',alt:title+' illustration placeholder'};
}
