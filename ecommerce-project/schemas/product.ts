export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{type: 'image'}],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },

        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
        },
        // {
        //     name: 'vendor',
        //     type: 'reference',
        //     title: 'Vendor',
        //     to: [{type: 'vendor'}],
        // },
        {
            name: 'category',
            type: 'reference',
            title: 'Product Category',
            to: [{type: 'category'}],
        },
        {
            name: 'price_id',
            type: 'string',
            title: 'Stripe Price ID',
        }
       
    ],
}