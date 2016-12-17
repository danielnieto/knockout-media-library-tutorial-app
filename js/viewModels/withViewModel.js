var app = window.app || {};

app.WithViewModel = (function(){
    'use strict';

        var me = {
        taxonomies: [
        {
            Animal: {
                Name: 'Cheetah',
                Kingdom: {
                    Name: 'Animalia',
                    Phylum: {
                        Name: 'Chordata',
                        Class: {
                            Name: 'Mammalia',
                            Order: { 
                                Name: 'Carnivora',
                                Family: {
                                    Name: 'Felidae',
                                    Genus: {
                                        Name: 'Acinynox',
                                        Species: {
                                            Name: 'Jubatus'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
        {
            Animal: {
                Name: 'Koala',
                Kingdom: {
                    Name: 'Animalia',
                    Phylum: {
                        Name: 'Chordata',
                        Class: {
                            Name: 'Mammalia',
                            Order: {
                                Name: 'Diprotondontia',
                                Family: {
                                    Name: 'Phascolarctidae',
                                    Genus: {
                                        Name: 'Phascolarctos',
                                        Species: {
                                            Name: 'Cinereus'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
        {
            Animal: {
                Name: 'Snowy Owl',
                Kingdom: {
                    Name: 'Animalia',
                    Phylum: {
                        Name: 'Chordata',
                        Class: {
                            Name: 'Aves',
                            Order: {
                                Name: 'Strigiformes',
                                Family: {
                                    Name: 'Strigidae',
                                    Genus: {
                                        Name: 'Nyctea',
                                        Species: {
                                            Name: 'Scandiaca'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }]
    };

    return me;

})();