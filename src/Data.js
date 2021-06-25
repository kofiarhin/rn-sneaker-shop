// todo --add sizies to data

// 32 items

// change to objects for data normalization

const Data = {

    // JORDAN
        jordan: {
            id: 1,
            title: "jordan",
            slug: "The Air Jordan brand has cemented itself as a household name since the release of its first basketball shoe back in 1985 thanks to Michael Jordan’s glittering career. Since then, Nike has released numerous popular trainers and colourways from Jordan brand, including sneaker collaborations with the likes of Travis Scott, Dior, Fragment, Off-White, and UNION LA.",
            items: [
                {
                    id:1,
                    name: "AIR JORDAN 1 MID PS 'BANNED'",
                    price: 400.99,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_PS_BANNED/img-1.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_PS_BANNED/img-2.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_PS_BANNED/img-3.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_PS_BANNED/img-4.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_PS_HYPER_ROYAL/img-1.jpeg")

                    ]
                },

                {
                    id:2,
                    name: "AIR JORDAN 1 MID PS 'HYPER ROYAL'",
                    price: 450.99,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_PS_HYPER_ROYAL/img-1.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_PS_HYPER_ROYAL/img-2.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_PS_HYPER_ROYAL/img-3.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_PS_HYPER_ROYAL/img-4.jpeg"),


                    ]

                    
                },

                {
                    id:3,
                    name: "AIR JORDAN 1 MID SE 'TURF ORANGE'",
                    price: 300.99,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_SE_TURF_ORANGE/img-1.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_SE_TURF_ORANGE/img-2.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_SE_TURF_ORANGE/img-3.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_MID_SE_TURF_ORANGE/img-4.jpeg")
                    ]
                },

                {
                    id:4,
                    name: "AIR JORDAN 1 WMNS MID SE 'PEACH MOCHA'",
                    price: 404,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_WMNS_MID_SE_PEACH_MOCHA/img-1.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_WMNS_MID_SE_PEACH_MOCHA/img-2.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_WMNS_MID_SE_PEACH_MOCHA/img-3.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_WMNS_MID_SE_PEACH_MOCHA/img-4.jpeg"),

                    ]
                },

                 {
                    id:5,
                    name: "AIR JORDAN 4 RETRO 'ORANGE METALLIC'",
                    price: 404,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_4_RETRO_ORANGE_METALLIC/img-1.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_4_RETRO_ORANGE_METALLIC/img-2.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_4_RETRO_ORANGE_METALLIC/img-3.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_4_RETRO_ORANGE_METALLIC/img-4.jpeg"),
                    ]
                },
                {
                    id:6,
                    name: "AIR JORDAN 4 RETRO 'TAUPE HAZE'",
                    price: 379.99,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_4_RETRO_TAUPE_HAZE/img-1.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_4_RETRO_TAUPE_HAZE/img-2.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_4_RETRO_TAUPE_HAZE/img-3.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_4_RETRO_TAUPE_HAZE/img-4.jpeg"),
                    ]
                },

                {
                    id:7,
                    name: "AIR JORDAN 4 WMNS RETRO 'STARFISH'",
                    price: 379.99,
                   sizes: [34, 38, 40, 45],
                   images: [
                       require("../assets/images/sneakers/jordan/AIR_JORDAN_4_WMNS_RETRO_STARFISH/img-1.jpeg"),
                       require("../assets/images/sneakers/jordan/AIR_JORDAN_4_WMNS_RETRO_STARFISH/img-2.jpeg"),
                       require("../assets/images/sneakers/jordan/AIR_JORDAN_4_WMNS_RETRO_STARFISH/img-3.jpeg"),
                       require("../assets/images/sneakers/jordan/AIR_JORDAN_4_WMNS_RETRO_STARFISH/img-4.jpeg"),
                   ]
                },

                {
                    id:8,
                    name: "AIR JORDAN 1 ZOOM COMFORT 'LONDON'",
                    price: 219.99,
                    sizes: [36, 37, 38],
                    images: [
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_ZOOM_COMFORT_LONDON/img-1.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_ZOOM_COMFORT_LONDON/img-2.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_ZOOM_COMFORT_LONDON/img-3.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_ZOOM_COMFORT_LONDON/img-4.jpeg"),
                    ]
                },

                {
                    id:32,
                    name: "AIR JORDAN 1 WMNS MID 'APRICOT'",
                    price: 219.99, 
                    sizes: [36, 37, 38],
                    images: [
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_WMNS_MID_APRICOT/img-1.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_WMNS_MID_APRICOT/img-2.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_WMNS_MID_APRICOT/img-3.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_WMNS_MID_APRICOT/img-4.jpeg"),

                    ]
                },

                 {
                    id:33,
                    name: "AIR JORDAN 1 RETRO HIGH OG 'BLACK METALLIC GOLD'",
                    price: 239.99, 
                    sizes: [36, 37, 38],
                    images: [
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_RETRO_HIGH OG_BLACK_METALLIC_GOLD/img-1.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_RETRO_HIGH OG_BLACK_METALLIC_GOLD/img-2.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_RETRO_HIGH OG_BLACK_METALLIC_GOLD/img-3.jpeg"),
                        require("../assets/images/sneakers/jordan/AIR_JORDAN_1_RETRO_HIGH OG_BLACK_METALLIC_GOLD/img-4.jpeg"),
                    ]
                },

                
            ]
        },




        // ADIDAS

         adidas: {
            id: 2,
            title: "adidas",
            items: [
                {
                    id:9,
                    name: "ADIDAS YEEZY 700 V3 'CLAY BROWN'",
                    price: 480,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_700_V3_KYANITE/img-1.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_700_V3_KYANITE/img-2.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_700_V3_KYANITE/img-3.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_700_V3_KYANITE/img-4.jpeg"),
                    ]

                },

                {
                    id:10,
                    name: "ADIDAS YEEZY BOOST 350 V2 'YEEZREEL NON-REFLECTIVE'",
                    price: 450,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_350_V2_YEEZREEL_NON_REFLECTIVE/img-1.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_350_V2_YEEZREEL_NON_REFLECTIVE/img-2.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_350_V2_YEEZREEL_NON_REFLECTIVE/img-3.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_350_V2_YEEZREEL_NON_REFLECTIVE/img-4.jpeg"),

                    ]
                },

                {
                    id:11,
                    name: "ADIDAS YEEZY BOOST 350 V2 CLAY",
                    price: 300,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_350_V2_CLAY/img-1.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_350_V2_CLAY/img-2.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_350_V2_CLAY/img-3.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_350_V2_CLAY/img-4.jpeg"),
                    ]
                },

                {
                    id:12,
                    name: "ADIDAS YEEZY BOOST 700 ‘SUN'",
                    price: 400,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_700_SUN/img-1.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_700_SUN/img-2.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_700_SUN/img-3.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_700_SUN/img-4.jpeg"),
                    ]
                },

                                {
                    id:13,
                    name: "ADIDAS YEEZY 700 V3 'KYANITE'",
                    price: 350,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_700_V3_KYANITE/img-1.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_700_V3_KYANITE/img-2.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_700_V3_KYANITE/img-3.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_700_V3_KYANITE/img-4.jpeg"),
                    ]
                },


                {
                    id:14,
                    name: "ADIDAS YEEZY BOOST 380 'CALCITE GLOW'",
                    price: 279.99,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_380_CALCITE_GLOW/img-1.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_380_CALCITE_GLOW/img-2.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_380_CALCITE_GLOW/img-3.jpeg"),
                        require("../assets/images/sneakers/adidas/ADIDAS_YEEZY_BOOST_380_CALCITE_GLOW/img-4.jpeg"),
                    ]
                },


            ]
        },



        // NIKE 

       nike:  {
            id: 3,
            title: "nike",
            items: [
                {
                    id:15,
                    name: "GRATEFUL DEAD X NIKE DUNK LOW SB 'ORANGE BEAR'",
                    price: 400,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SB_NIGHT_OF_MISCHIEF/img-1.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SB_NIGHT_OF_MISCHIEF/img-2.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SB_NIGHT_OF_MISCHIEF/img-3.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SB_NIGHT_OF_MISCHIEF/img-4.jpeg")
    
                    ]
                },

                {
                    id:16,
                    name: "NIKE DUNK HIGH SP 'MICHIGAN' 2020",
                    price: 450,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/nike/NIKE_DUNK_HIGH_SP_MICHIGAN_2020/img-1.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_HIGH_SP_MICHIGAN_2020/img-2.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_HIGH_SP_MICHIGAN_2020/img-3.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_HIGH_SP_MICHIGAN_2020/img-4.jpeg")

                    ]
                },

                {
                    id:17,
                    name: "NIKE DUNK LOW SB 'NIGHT OF MISCHIEF'",
                    price: 300,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SB_NIGHT_OF_MISCHIEF/img-1.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SB_NIGHT_OF_MISCHIEF/img-2.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SB_NIGHT_OF_MISCHIEF/img-3.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SB_NIGHT_OF_MISCHIEF/img-4.jpeg")
                    ]
                },

                {
                    id:18,
                    name: "NIKE DUNK LOW SP RETRO 'VENEER' 2020",
                    price: 400,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SP_RETRO_VENEER_2020/img-1.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SP_RETRO_VENEER_2020/img-2.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SP_RETRO_VENEER_2020/img-3.jpeg"),
                        require("../assets/images/sneakers/nike/NIKE_DUNK_LOW_SP_RETRO_VENEER_2020/img-4.jpeg"),
                    ]
                },


                {
                    id:19,
                    name: "DQM X NIKE AIR MAX 90 'BACON' 2021",
                    price: 209.99,
                    description: "some details about product",
                    sizes: [32, 38, 45],
                    images: [
                        require("../assets/images/sneakers/nike/DQM_X_NIKE_AIR_MAX_90_BACON_2021/img-1.jpeg"),
                        require("../assets/images/sneakers/nike/DQM_X_NIKE_AIR_MAX_90_BACON_2021/img-2.jpeg"),
                        require("../assets/images/sneakers/nike/DQM_X_NIKE_AIR_MAX_90_BACON_2021/img-3.jpeg"),
                        require("../assets/images/sneakers/nike/DQM_X_NIKE_AIR_MAX_90_BACON_2021/img-4.jpeg"),
                    ]
                },

                {
                    id:34,
                    name: "NIKE DUNK HIGH SP 'IOWA' 2020",
                    price: 209.99,
                    description: "some details about product",
                    sizes: [32, 38, 45],
                    images: [
                        require('../assets/images/sneakers/nike/NIKE_DUNK_HIGH_SP_IOWA_2020/img-1.jpeg'),
                        require('../assets/images/sneakers/nike/NIKE_DUNK_HIGH_SP_IOWA_2020/img-2.jpeg'),
                        require('../assets/images/sneakers/nike/NIKE_DUNK_HIGH_SP_IOWA_2020/img-3.jpeg'),
                        require('../assets/images/sneakers/nike/NIKE_DUNK_HIGH_SP_IOWA_2020/img-4.jpeg'),
                    ]
                },
            ]
        },



        // WOMEN
        women: {
            id: 4,
            title: "women",
            items: [
                {
                    id:28,
                    name: "AIR JORDAN 1 WMNS LOW SE 'DARK BEETROOT'",
                    price: 400,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_LOW_SE_DARK_BEETROOT/img-1.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_LOW_SE_DARK_BEETROOT/img-2.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_LOW_SE_DARK_BEETROOT/img-3.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_LOW_SE_DARK_BEETROOT/img-4.jpeg"),
                    ]
                },

                {
                    id:29,
                    name: "AIR JORDAN 1 WMNS MID 'SIREN RED' ",
                    price: 450,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_MID_SIREN_RED/img-1.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_MID_SIREN_RED/img-2.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_MID_SIREN_RED/img-3.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_MID_SIREN_RED/img-4.jpeg"),
                    ]
                },

                {
                    id:30,
                    name: "AIR JORDAN 1 WMNS MID SE 'PEACH MOCHA'",
                    price: 300,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_MID_SE_PEACH_MOCHA/img-1.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_MID_SE_PEACH_MOCHA/img-2.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_MID_SE_PEACH_MOCHA/img-3.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_MID_SE_PEACH_MOCHA/img-4.jpeg")
                    ]
                },

                {
                    id:31,
                    name: "AIR JORDAN 1 WMNS RETRO HIGH OG 'SILVER TOE'",
                    price: 400,
                    sizes: [34, 38, 40, 45],
                    iamges: [
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_RETRO_HIGH_OG_SILVER_TOE/img-1.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_RETRO_HIGH_OG_SILVER_TOE/img-2.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_RETRO_HIGH_OG_SILVER_TOE/img-3.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_1_WMNS_RETRO_HIGH_OG_SILVER_TOE/img-4.jpeg")
                    ]
                },

                {
                    id:32,
                    name: "AIR JORDAN 4 RETRO OG GS 'FIRE RED' 2020",
                    price: 400,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/women/AIR_JORDAN_4_RETRO_OG_GS_FIRE_RED_2020/img-1.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_4_RETRO_OG_GS_FIRE_RED_2020/img-2.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_4_RETRO_OG_GS_FIRE_RED_2020/img-3.jpeg"),
                        require("../assets/images/sneakers/women/AIR_JORDAN_4_RETRO_OG_GS_FIRE_RED_2020/img-4.jpeg")
                    ]
                },

                  {
                    id:33,
                    name: "NIKE AIR MAX 90 WMNS 'VALENTINE'S DAY'",
                    price: 400,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/women/NIKE_AIR_MAX_90_WMNS_VALENTINES_DAY/img-1.jpeg"),
                        require("../assets/images/sneakers/women/NIKE_AIR_MAX_90_WMNS_VALENTINES_DAY/img-2.jpeg"),
                        require("../assets/images/sneakers/women/NIKE_AIR_MAX_90_WMNS_VALENTINES_DAY/img-3.jpeg"),
                        require("../assets/images/sneakers/women/NIKE_AIR_MAX_90_WMNS_VALENTINES_DAY/img-4.jpeg"),

                    ]
                },
            ]
        },



        //kids
        kids: {
            id: 5,
            title: "kids",
            items: [
                {
                    id:24,
                    name: "AIR JORDAN 1 MID SE PS 'VARSITY PURPLE'",
                    price: 400,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/kids/AIR_JORDAN_1_MID_SE_PS_VARSITY_PURPLE/img-1.jpeg"),
                        require("../assets/images/sneakers/kids/AIR_JORDAN_1_MID_SE_PS_VARSITY_PURPLE/img-2.jpeg"),
                        require("../assets/images/sneakers/kids/AIR_JORDAN_1_MID_SE_PS_VARSITY_PURPLE/img-3.jpeg"),
                        require("../assets/images/sneakers/kids/AIR_JORDAN_1_MID_SE_PS_VARSITY_PURPLE/img-4.jpeg"),
                    ]
                },

                {
                    id:25,
                    name: "ADIDAS YEEZY BOOST 350 V2 KIDS 'LUNDMARK NON-REFLECTIVE'",
                    price: 400,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/kids/ADIDAS_YEEZY_BOOST_350_V2_KIDS_LUNDMARK_NON_REFLECTIVE/img-1.jpeg"),
                        require("../assets/images/sneakers/kids/ADIDAS_YEEZY_BOOST_350_V2_KIDS_LUNDMARK_NON_REFLECTIVE/img-2.jpeg"),
                        require("../assets/images/sneakers/kids/ADIDAS_YEEZY_BOOST_350_V2_KIDS_LUNDMARK_NON_REFLECTIVE/img-3.jpeg"),
                        require("../assets/images/sneakers/kids/ADIDAS_YEEZY_BOOST_350_V2_KIDS_LUNDMARK_NON_REFLECTIVE/img-4.jpeg"),

                        
                    ]
                },


                {
                    id:26,
                    name: "ADIDAS YEEZY BOOST 350 V2 KIDS 'YECHEIL'",
                    price: 430,
                   sizes: [34, 38, 40, 45],
                   images: [
                       require("../assets/images/sneakers/kids/ADIDAS_YEEZY_BOOST_350_V2_KIDS_)YECHEIL/img-1.jpeg"),
                       require("../assets/images/sneakers/kids/ADIDAS_YEEZY_BOOST_350_V2_KIDS_)YECHEIL/img-2.jpeg"),
                       require("../assets/images/sneakers/kids/ADIDAS_YEEZY_BOOST_350_V2_KIDS_)YECHEIL/img-3.jpeg"),
                       require("../assets/images/sneakers/kids/ADIDAS_YEEZY_BOOST_350_V2_KIDS_)YECHEIL/img-4.jpeg"),
                   ]
                },

                {
                    id:27,
                    name: "NIKE DUNK LOW PS 'ORANGE PEARL'",
                    price: 430,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/kids/NIKE_DUNK_LOW_PS_ORANGE_PEARL/img-1.jpeg"),
                        require("../assets/images/sneakers/kids/NIKE_DUNK_LOW_PS_ORANGE_PEARL/img-2.jpeg"),
                        require("../assets/images/sneakers/kids/NIKE_DUNK_LOW_PS_ORANGE_PEARL/img-3.jpeg"),
                        require("../assets/images/sneakers/kids/NIKE_DUNK_LOW_PS_ORANGE_PEARL/img-4.jpeg"),
                    ]
                },

                                 {
                    id:34,
                    name: "AIR JORDAN 1 RETRO HIGH OG PS 'SATIN RED'",
                    price: 119.99,
                    sizes: [34, 38, 40, 45],
                    images: [
                        require("../assets/images/sneakers/kids/AIR_JORDAN_1_RETRO_HIGH_OG_PS_SATIN_RED/img-1.jpeg"),
                        require("../assets/images/sneakers/kids/AIR_JORDAN_1_RETRO_HIGH_OG_PS_SATIN_RED/img-2.jpeg"),
                        require("../assets/images/sneakers/kids/AIR_JORDAN_1_RETRO_HIGH_OG_PS_SATIN_RED/img-3.jpeg"),

                    ]
                },

                 

            ]
        },

        // END KIDS




    }


export default Data;