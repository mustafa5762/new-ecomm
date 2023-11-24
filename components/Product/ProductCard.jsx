import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useRouter } from 'next/navigation'

export default function ProductCard({product}) {
  const router = useRouter()
  console.log(product)
  return (
        <Card shadow="none" className="bg-default-100" isPressable onPress={() => router.push(`/products/${product.slug}`, { scroll: false }) }>
          <CardBody className="overflow-visible">
            <Image
              shadow="none"
              radius="lg"
              width="100%"
              alt="sfddf"
              className="w-full"
              src={product.colors[0].images[0].url}
            />
          </CardBody>
          <CardFooter className="text-small justify-between px-6 py-4">
            <p className="text-defaul-800 font-semibold">{product.name}</p>
            <p className="text-defaul-600 font-medium">{product.prices[0].price}</p>
          </CardFooter>
        </Card>
  );
}

