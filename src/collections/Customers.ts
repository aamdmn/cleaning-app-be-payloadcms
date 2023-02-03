import { CollectionConfig } from 'payload/types';

const Customers: CollectionConfig = {
    slug: 'customers',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'name',
                    label: 'Meno zakaznika',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '70%',
                    },
                },
                {
                    name: 'current_credit',
                    label: 'Kredit',
                    type: 'number',
                    required: true,
                    admin: {
                        width: '30%',
                    },
                },
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'hourly_rate',
                    label: 'Hodinova sadzba',
                    type: 'number',
                    required: true,
                    admin: {
                        width: '50%',
                    },
                },
                {
                    name: 'monthly_budget',
                    label: 'Mesacny rozpocet',
                    type: 'number',
                    admin: {
                        width: '50%',
                    },
                },
            ],
        },
    ]
};

export default Customers;