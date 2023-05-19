# E-Commerce Website Test Plan

## Introduction

This test plan is designed to verify the functionality of the shopping cart on our e-commerce website. We will be conducting end-to-end testing to ensure that users can add items to the cart, remove them, and complete a purchase.

## Test Cases

### Test Case 1: Add an item to the shopping cart then validate user can purchase

1. **Steps**:
   1. Navigate to the product page.
   2. Choose an item.
   3. Click "Add to cart".
   4. Click on the cart.
   5. Click "Checkout".
   6. Complete the payment process.
2. **Expected Result**: The item is successfully added to the cart, the checkout process is completed without any issues, and the user is able to successfully purchase the item.

### Test Case 2: Add multiple distinct items to the shopping cart and verify user can purchase them

1. **Steps**:
   1. Navigate to the product page.
   2. Choose multiple distinct items.
   3. Click "Add to cart" for each item.
   4. Click on the cart.
   5. Verify all chosen items are present.
   6. Click "Checkout".
   7. Complete the payment process.
2. **Expected Result**: All items are successfully added to the cart, the checkout process is completed without any issues, and the user is able to successfully purchase all items.

### Test Case 3: Should not add item without necessary specifications

1. **Steps**:
   1. Navigate to a product page that requires specifications (like size or color).
   2. Try to add the item to the cart without choosing specifications.
2. **Expected Result**: The item is not added to the cart, and the user is prompted to choose necessary specifications.

### Test Case 4: Removes a product and checks the cart is updated

1. **Steps**:
   1. Add one or more items to the cart.
   2. Navigate to the cart.
   3. Choose an item and click "Remove".
2. **Expected Result**: The item is removed from the cart, and the cart is updated to reflect this change.

### Test Case 5: Should remove multiple distinct items correctly from the cart

1. **Steps**:
   1. Add multiple items to the cart.
   2. Navigate to the cart.
   3. Choose multiple items and click "Remove" for each.
2. **Expected Result**: All chosen items are removed from the cart, and the cart is updated to reflect these changes.

## Conclusion

Successful execution and validation of these test cases will ensure that our shopping cart is functioning correctly. Any deviations from the expected results should be logged as issues and addressed by the development team.

