grocery_stock = {'orange':5, 'tomato':2, 'banana':3}

customer_cart = {}

running = True

while running:
    print()
    print('Welcome to the grocery store! \nWe have the following items in stock:')
    for item in grocery_stock:
        print(f'{item}: {grocery_stock[item]}')

    item = input('What would you like to buy?')

    if item in grocery_stock:
        quantity = int(input('How many would you like to buy?'))

        if quantity <= grocery_stock[item]:
            grocery_stock[item] -= quantity
            if item in customer_cart:
                customer_cart[item] += quantity
            else:
                customer_cart[item] = quantity
        else:
            print('Sorry, we do not have enough stock for that item.')

    else:
        print('Sorry, we do not have that item in stock.')

    print('Your cart contains the following items:')
    for item in customer_cart:
        print(f'{item}: {customer_cart[item]}')
        
    print('Would you like to buy anything else? (yes/no)')
    response = input()
    if response == 'no':
        running = False