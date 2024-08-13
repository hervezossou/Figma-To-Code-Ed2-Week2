/* Navigation Menu Toggle */

// We get all elements to toggle

const openMenuButton = document.getElementById('open-menu')
const closeMenuButton = document.getElementById('close-menu')
const mobileMenuNav = document.querySelector('.mobile-menu-nav')
const mobileMenu = document.querySelector('.mobile-menu')

// Build toggleMenu function
function toggleMenu () {
  openMenuButton.classList.toggle('is-hidden')
  closeMenuButton.classList.toggle('is-hidden')
  mobileMenuNav.classList.toggle('is-active')
}

// Use toggleMenu to switch between open and close menu
openMenuButton.addEventListener('click', toggleMenu)
closeMenuButton.addEventListener('click', toggleMenu)

// Hidding the mobile menu nav when user click outside the menu
document.onclick = function(e) {
  if(!openMenuButton.contains(e.target) && !mobileMenuNav.contains(e.target)) {
    openMenuButton.classList.toggle('is-hidden')
    closeMenuButton.classList.toggle('is-hidden')
    mobileMenuNav.classList.toggle('is-active')
  }
}

/* Getting Full Year for footer bOttom */
document.getElementById('year').textContent = new Date().getFullYear()

/* Data Fetchning Function */

async function fetchProducts(apiUrl, productCount) {
  // Building the request by replacing the product quantity
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

function buildProductCard(productsData, conversionRate = 0.73) {

  // Our target section
  section = document.querySelector('.products-container')

  productsData.forEach(product => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    // Container for image and details
    const imageContainer = document.createElement('div')
    imageContainer.classList.add('image-container')
    const productDetails = document.createElement('div')
    productDetails.classList.add('product-details')

    // Image
    imageContainer.style.backgroundImage = `url(${product.featuredImage.url})`
    imageContainer.style.backgroundSize = 'cover'
    imageContainer.style.backgroundPosition = 'center';

    // Details
    const productTitle = document.createElement('h2')
    productTitle.classList.add('product-title')
    productTitle.textContent = product.title

    const productPrice = document.createElement('h3')
    productPrice.classList.add('product-price')
    productPrice.textContent = `$${(product.variants.edges[0].node.price.amount * conversionRate).toFixed(2)}`

    productDetails.appendChild(productTitle)
    productDetails.appendChild(productPrice)

    productCard.appendChild(imageContainer)
    productCard.appendChild(productDetails)

    section.appendChild(productCard)
  })
}

async function main() {
  const apiUrl = 'https://mock.shop/api'
  const desiredProductCount = 6

  try {
      const products = await fetchProducts(apiUrl, desiredProductCount)
      buildProductCard(products)
  }
  catch(error) {
      console.error('Erreur lors de la récupération des produits:', error)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  main()
})