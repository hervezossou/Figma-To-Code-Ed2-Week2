document.getElementById('year').textContent = new Date().getFullYear()

/* Data Fetchning Function */

async function fetchProducts(apiUrl, productCount) {
    // Construire la requête en remplaçant le nombre de produits
    const query = `{
      products(first: ${productCount}) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              id
              url
            }
            variants(first: 3) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }`
  
    // Effectuer la requête
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
  
    // Vérifier si la requête a réussi
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
  
    // Parser la réponse JSON
    const data = await response.json()
  
    // Extraire les données des produits
    const productsData = data.data.products.edges.map(edge => edge.node);
  
    return productsData
  }
  

const apiUrl = 'https://mock.shop/api'
const desiredProductCount = 6

/* Builiding Products with Fetched Products Data */

async function buildProductCard(section, conversionRate = 0.73) {

    // Await the promise from fetchProducts to get actual data
    const productsData = await fetchProducts(apiUrl, desiredProductCount)

    // Our target section
    section = document.querySelector('products-container')

    productsData.forEach(product => {
      const productCard = document.createElement('div')
      productCard.classList.add('product-card')
  
      // Container for image and details
      const imageContainer = document.createElement('div')
      imageContainer.classList.add('image-container')
      const productDetails = document.createElement('div')
      productDetails.classList.add('product-details')
  
      // Image
      const productImage = document.createElement('img')
      productImage.src = product.featuredImage.url
      imageContainer.appendChild(productImage)
  
      // Details
      const productTitle = document.createElement('h2')
      productTitle.classList.add('product-title')
      productTitle.textContent = product.title

      const productPrice = document.createElement('h3')
      productPrice.classList.add('product-price')
      productPrice.textContent = `${(product.variants.edges[0].node.price.amount * conversionRate).toFixed(2)} $`
  
      productDetails.appendChild(productTitle)
      productDetails.appendChild(productPrice)
  
      productCard.appendChild(imageContainer)
      productCard.appendChild(productDetails)
  
      section.appendChild(productCard);
    });
}