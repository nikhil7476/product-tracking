import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { products } from "@/utils/productData";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Product Listing</title>
      <meta name="description" content="A simple product listing page" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <section>
        <Container className="py-4">
          <h1 className="text-center mb-4">Product Listing</h1>
          <Row>
            {products.map((product) => (
              <Col key={product.id} lg={3} md={4} sm={6} xs={12}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
