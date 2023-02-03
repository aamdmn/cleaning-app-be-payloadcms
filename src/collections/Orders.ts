import { CollectionConfig } from 'payload/types';

const Orders: CollectionConfig = {
    slug: 'orders',
    admin: {
        useAsTitle: 'id',
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'customer',
                    label: 'Zakaznik',
                    type: 'relationship',
                    relationTo: 'customers',
                    hasMany: false,
                    required: true,
                },
                {
                    name: 'status',
                    label: 'Stav',
                    type: 'select',
                    required: true,
                    options: [
                        {
                            label: 'Started',
                            value: 'started',
                        },
                        {
                            label: 'Planned',
                            value: 'planned',
                        },
                        {
                            label: 'Ended',
                            value: 'ended',
                        },
                        {
                            label: 'Cancelled',
                            value: 'cancelled',
                        },
                        {
                            label: 'Template',
                            value: 'template',
                        },
                    ],
                },
            ]
        },
        {
            name: 'date',
            label: 'Datum',
            type: 'date',
            required: true,
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                    displayFormat: 'dd.MM.yyyy',
                },
            }
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'estimated_start',
                    label: 'Odhadovany zaciatok',
                    type: 'date',
                    required: true,
                    admin: {
                        date: {
                            pickerAppearance: 'timeOnly',
                            displayFormat: 'HH:mm',
                        },
                        width: '33%'
                    },
                },
                {
                    name: 'estimated_end',
                    label: 'Odhadovany koniec',
                    type: 'date',
                    required: true,
                    admin: {
                        date: {
                            pickerAppearance: 'timeOnly',
                            displayFormat: 'HH:mm',
                        },
                        width: '33%'
                    },
                },
                {
                    name: 'estimated_duration_h',
                    label: 'Odhadovany cas v hodinach',
                    type: 'number',
                    max: 24,
                    min: 0,
                    required: true,
                    admin: {
                        width: '33%'
                    },
                },
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'real_start',
                    label: 'Skutocny zaciatok',
                    type: 'date',
                    admin: {
                        date: {
                            pickerAppearance: 'timeOnly',
                            displayFormat: 'HH:mm',
                        },
                        width: '33%'
                    },
                },
                {
                    name: 'real_end',
                    label: 'Skutocny koniec',
                    type: 'date',
                    admin: {
                        date: {
                            pickerAppearance: 'timeOnly',
                            displayFormat: 'HH:mm',
                        },
                        width: '33%'
                    },
                },
                {
                    name: 'real_duration_h',
                    label: 'Realny cas v hodinach',
                    type: 'number',
                    max: 24,
                    min: 0,
                    required: true,
                    admin: {
                        width: '33%'
                    },
                },
            ]
        },
        {
            name: 'manual_price',
            label: 'Manualna cena',
            type: 'number',
            admin: {
                width: '50%',
            },
        },
    ],
};

export default Orders;