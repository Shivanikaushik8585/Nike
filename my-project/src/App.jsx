import "./index.css"
// import { PopularProducr } from "./sections";
import {NavBar ,Subsribe,Hero,CustomerReview,Footer,Review,Service,Speciality,SpecialOffer} from './sections'
import ProductPopular from "./sections/ProductPopular";
const App =()=>(
  <main >
    < NavBar/>
    <section className="xl:padding-1 wide:padding-r padding-b">

     <Hero/>

    </section>
    <section className="padding">
      <ProductPopular/>
    </section>
   
    <section className="padding">
      <Speciality/>
    </section>
    <section className="padding-x py-10">
      <Service/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    
    <section className="bg-pale-blue padding">
      <CustomerReview/>
    </section>
 
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
    
  </main>
)
export default App;
 

