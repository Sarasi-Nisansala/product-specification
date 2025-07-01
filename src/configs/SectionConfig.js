const navBarSections = [
    {label: 'Customer Registration', id: 'customerReg', route: '/customerHistory'},
    {label: 'Product Identification', id: 'productIdentification', route: '/'},
    {
        label: 'Product Materials',
        id: 'materials',
        route: '/productMaterials',
        subItems: [
            {label: 'Bill of Materials', id: 'billMaterials', route: '/productMaterials'},
            {label: 'Material Composition', id: 'materialComposition', route: '/productMaterials'},
            {label: 'Recycled Content', id: 'recycledSection', route: '/productMaterials'},
            {label: 'Product Details', id: 'productDetails', route: '/productMaterials'},
        ],
    },
    {
        label: 'Guidelines and Manuals',
        id: 'guidLinesAndManuals',
        route: '/manuals',
        subItems: [
            {label: 'Parts Identification', id: 'partIdentification', route: '/manuals'},
            {label: 'Installation Guidelines', id: 'docList', route: '/manuals'},
            {label: 'Product Manual', id: 'docList', route: '/manuals'},
            {label: 'Safety Instructions', id: 'docList', route: '/manuals'},
            {label: 'Video Guidelines for Maintenance', id: 'videoGuidelines', route: '/manuals'},
            {label: 'Guidelines for Non-destructive Disassembly', id: 'docList', route: '/manuals'},
            {label: 'Instructions for Efficient Energy Use', id: 'docList', route: '/manuals'},
        ],
    },
    {
        label: 'Supply Chain',
        id: 'supplyChain',
        route: '/supplyChain',
        subItems: [
            {label: 'Suppliers of Components', id: 'componentsSupplyChain', route: '/componentSupply'},
            {label: 'Repair Centers', id: 'repairCenters', route: '/repair'},
            {label: 'Recycling Partners', id: 'recyclingPartners', route: '/recycleCenterPage'},
            {label: 'Resell Your Product', id: 'resellProduct', route: '/resellCenter'},
        ],
    },
    {label: 'Environmental Impact', id: 'environmentalImpact', route: '/envImpact'},
    {label: 'Social Sustainability', id: 'socialSustainability', route: "/socialSustainability"},
    {
        label: 'Compliance',
        id: 'compliance',
        route: '/complience',
        subItems: [
            {label: 'Product Specific Regulations', id: 'prodRegulations', route: '/complience'},
            {label: 'Certifications', id: 'certifications', route: '/complience'}
        ],
    },
    {
        label: 'End of Life Management',
        id: 'endOfLifeManagement',
        route: "/endOfLife",
        subItems: [
            {label: 'Disposal Guide', id: 'disposalGuide', route: '/endOfLife'},
            {label: 'Packaging and Recycling', id: 'recycledSection', route: '/endOfLife'},
            {label: 'Impacts of throwing kettle to garbage', id: 'garbage', route: '/endOfLife'},
            {label: 'Why Proper Disposal', id: 'properDisposal', route: '/endOfLife'},
        ],
    },
];

export {navBarSections};