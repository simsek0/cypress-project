
describe('Shopping Cart', () => {
    beforeEach(() => {
        // Visit Amazon homepage before each test
        cy.visit('https://magento.softwaretestingboard.com');
    });

    it('Add an item to the shopping cart then validate user can purchase', () => {
        // Search for a product
        
        cy.get('#search').type('Jackets for women{enter}');

        // Click on the first product link (this selector might not be accurate)
        cy.get('.product-image-photo').first().click();

        cy.get('#option-label-size-143-item-168').click();

        cy.get('#option-label-color-93-item-50').click();
        // Click the "Add to Cart" button
        cy.get('#product-addtocart-button').click();

        cy.get('.counter-number').click();

        cy.get('#top-cart-btn-checkout').click();


        fillUserInfo();

    });

    
    it('Add multiple distinct items to the shopping cart and verify user can purchase them', () => {

        const items = ['Jackets for women', 'Jackets for men'];

        // Add each item to the cart
        items.forEach(item => {
            // Search for the item
            cy.get('#search').type('Jackets for women{enter}');

        // Click on the first product link (this selector might not be accurate)
        cy.get('.product-image-photo').first().click();

        cy.get('#option-label-size-143-item-168').click();

        cy.get('#option-label-color-93-item-50').click();
        // Click the "Add to Cart" button
        cy.get('#product-addtocart-button').click();

        
        });

        cy.get('.counter-number').click();

        cy.get('#top-cart-btn-checkout').click();

        fillUserInfo();
        
        
    });

    it('Should not add item without necessary specifications', function() {
        
        cy.get('#search').type('Jackets for women{enter}');

        // Click on the first product link (this selector might not be accurate)
        cy.get('.product-image-photo').first().click();


        cy.get('#product-addtocart-button').click();
    
        //This step addToCart could have been disabled until you choose color and size so more
        //convenient for user


        // Verify that a prompt asking for the necessary specifications is displayed
        cy.get('div.swatch-attribute.size div.mage-error').contains('This is a required field.');
        cy.get('div.swatch-attribute.color div.mage-error').contains('This is a required field.');

    
    
    });

    it('removes a product and checks the cart is updated', function() {

        cy.get('#search').type('Jackets for women{enter}');

        // Click on the first product link 
        cy.get('.product-image-photo').first().click();

        cy.get('#option-label-size-143-item-168').click();

        cy.get('#option-label-color-93-item-50').click();

        cy.get('#product-addtocart-button').click();


        cy.get('.counter-number').click();

        // Remove the product
        cy.get("div.secondary a[title='Remove item']").click();
        cy.get("button.action-primary.action-accept").click();

        // Assert that the cart is empty
        cy.contains("You have no items in your shopping cart.");

    })

    it('should remove multiple distinct items correctly from the cart', () => {

        cy.get('#search').type('Jackets for women{enter}');

        // Add two items to the cart
        // Click on the first product link 
        cy.get('.product-image-photo').first().click();

        cy.wait(4000);
        cy.get('div[attribute-code="size"] > div > div:first-child').click();

        cy.get('div[attribute-code="color"] > div > div:first-child').click();


        cy.get('#product-addtocart-button').click();

        cy.get('#search').type('pants for men{enter}');

        // Add two items to the cart
        // Click on the first product link 
        cy.get('.product-image-photo').first().click();

        cy.get('div[attribute-code="size"] > div > div:first-child').click();

        cy.get('div[attribute-code="color"] > div > div:first-child').click();

        cy.get('#product-addtocart-button').click();
        
        cy.wait(1000);

        cy.get('.counter-number').click();


        // Go to cart and remove first item
        for (let i = 0; i < 2; i++) {
            cy.get("div.secondary a[title='Remove item']").first().click();
            cy.get("button.action-primary.action-accept").click();
            cy.wait(3000);
        }
        
    
        // Assert that the cart is empty
        cy.contains("You have no items in your shopping cart.");
        
    });


    function fillUserInfo()
    {
        cy.wait(8000);

        cy.get('#customer-email').type('asdfasdfaskljsldfkjlskdf@sfdksjdlfkajslkdfj.com');

        cy.get('input[name="firstname"]').type('name');

        cy.get('input[name="lastname"]').type('lname');

        cy.get('input[name="street[0]"]').type('123 portland');


        cy.get('input[name="city"]').type('portland');

        cy.get('select[name="region_id"]').select('Texas');

        

        cy.get('input[name="postcode"]').type('77712');

        cy.get('input[name="telephone"]').type('1234523452');

        cy.get('input[type="radio"][value="flatrate_flatrate"]').click();


        cy.get('button[data-role="opc-continue"]').click();

        // Verify that the item has been added to the cart
        //cy.get('#nav-cart-count').should('have.text', '1');
        cy.wait(8000);

        cy.contains('span', 'Place Order').click();

        cy.wait(4000);

        cy.contains('Thank you for your purchase!').should('be.visible');


    }

    
});
