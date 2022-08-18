'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
        sass: {
            gdist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true, 
                    server: {
                        baseDir: './'
                    }
                }
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'gdist'
                }]
            },
            fonts: {
                files: [{
                    expand: true, 
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'gdist'
                }]
            }
        },
        clean: {
            build: {
                src: ['gdist/']
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true, 
                    dot: true,
                    cwd: './',
                    src: ['img/*.{png,jpg,gif}'],
                    dest: 'gdist'
                }]
            }
        },
        useminPrepare: {
            foo: {
                dest: 'gdist',
                src: ['contactus.html', 'aboutus.html', 'index.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0, rebase: false
                                };
                            }
                        }]
                    }
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            gdist: {}
        },
        uglify: {
            gdist: {}
        },
        cssmin: {
            gdist: {}
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            release: {
                files: [{
                    src: [
                        'gdist/js/*.js',
                        'gdist/css/*.css'
                    ]
                }]
            }
        },
        usemin: {
            html: ['gdist/contactus.html', 'gdist/aboutus.html', 'gdist/index.html'],
            options: {
                assetsDirs: ['gdist', 'gdist/css', 'gdist/js']
            }
        },
        htmlmin: {
            gdist: {
                options: {
                    collapseWhiespace: true
                },
                files: {
                    'gdist/index.html': 'gdist/index.html',
                    'gdist/contactus.html': 'gdist/contactus.html',
                    'gdist/aboutus.html': 'gdist/aboutus.html'
                }
            }
        }
    });
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);
};