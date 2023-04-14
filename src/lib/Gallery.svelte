<script>
	import image1 from "./images/image-product-1.jpg"
	import image2 from "./images/image-product-2.jpg"
	import image3 from "./images/image-product-3.jpg"
	import image4 from "./images/image-product-4.jpg"
	import image1thumbnail from "./images/image-product-1-thumbnail.jpg"
	import image2thumbnail from "./images/image-product-2-thumbnail.jpg"
	import image3thumbnail from "./images/image-product-3-thumbnail.jpg"
	import image4thumbnail from "./images/image-product-4-thumbnail.jpg"
</script>

<div class="gallery">
	<button class="lightbox">
		<img src={image1} alt="" class="lightbox__image" />
	</button>

	<button class="thumbnail">
		<img src={image1thumbnail} alt="" class="thumbnail__image" />
	</button>

	<button class="thumbnail">
		<img src={image2thumbnail} alt="" class="thumbnail__image" />
	</button>

	<button class="thumbnail">
		<img src={image3thumbnail} alt="" class="thumbnail__image" />
	</button>

	<button class="thumbnail">
		<img src={image4thumbnail} alt="" class="thumbnail__image" />
	</button>
</div>
