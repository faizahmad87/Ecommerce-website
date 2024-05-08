import { Row, Col } from "react-bootstrap"
import { product } from "../Product";
import ProductCard from "../components/ProductCard";
export default function Store(){
    return  <>
     <h1 align="center" className="p-3">Welcome to store!</h1>
     <Row xs={1} md={3} className="g-4">
        {product.map((product,idx)=>
          <Col align="center" key={idx}>
            <ProductCard product={product}/>
          </Col>)}
        
     </Row>
    </>
  }