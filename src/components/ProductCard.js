import { Card, Badge } from "react-bootstrap";

export default function ProductCard({ product }) {
  const handleClick = () => {
    if (product.badge) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "product_click_with_badge",
        product: {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          badge: product.badge,
        },
      });

      console.log("✅ Data Layer Event Pushed:", {
        event: "product_click_with_badge",
        product: {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          badge: product.badge,
        },
      });
    } else {
      console.log("⚠️ No Badge, Event Not Triggered");
    }
  };

  return (
    <Card
      className="shadow-sm"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <Card.Img variant="top" src={product.image} alt={product.name} title={product.name} />
      <Card.Body>
        <Card.Title>
          {product.name}{" "}
          {product.badge && (
            <Badge bg="danger" className="ms-2">
              {product.badge}
            </Badge>
          )}
        </Card.Title>
        <Card.Text>Category: {product.category}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
