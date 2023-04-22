/* Is supposed to simulate some external source of data */

import image1 from "../lib/images/image-product-1.jpg"
import image2 from "../lib/images/image-product-2.jpg"
import image3 from "../lib/images/image-product-3.jpg"
import image4 from "../lib/images/image-product-4.jpg"
import image1thumbnail from "../lib/images/image-product-1-thumbnail.jpg"
import image2thumbnail from "../lib/images/image-product-2-thumbnail.jpg"
import image3thumbnail from "../lib/images/image-product-3-thumbnail.jpg"
import image4thumbnail from "../lib/images/image-product-4-thumbnail.jpg"

export const product = {
	id: 0,
	name: "Fall Limited Edition Sneakers",
	price: {
		priceOld: 250,
		discount: 50,
		priceNew: 125,
	},
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
	images: [image1, image2, image3, image4],
	thumbnails: [
		{
			url: image1thumbnail,
			id: 0,
		},
		{
			url: image2thumbnail,
			id: 1,
		},
		{
			url: image3thumbnail,
			id: 2,
		},
		{
			url: image4thumbnail,
			id: 3,
		},
	],
}
