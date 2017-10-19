module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//sass
		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'auto'
				},
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},

		//imagemin
		imagemin: {
			dynamic: {
				files: {
					expand: true,
					cwd: 'images',
					src: ['**/*.{png, jpg, gif}', '!build/**/*.{png, jpg, gif}'],
					dest: 'images/build'
				}
			}
		},

		//browser-sync {
		browserSync: {
			bsFile: {
				src: ['css/*.css', '*.html']
			},
			options: {
				server: './',
				watchTask: true
			}
		},

		//jshint
		jshint: {
			files: {
				src: ['js/**/*.js']
			},
			options: {
				reporter: require('jshint-stylish'),
				camelcase: true,
				//curly: true,
				//latedef: true,
				//undef: true,
				//unused: true,
				//sub: true,
				//eqnull: true
			}
		},

		//watch
		watch: {
			scss: {
				files: ['scss/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true,
					spawn: false,
				}
			},
			browser: {
				files: ['css/*.css', '*.html'],
				tasks: ['browserSync']
			},

			jshint: {
				files: ['js/**/*.js'],
				tasks: ['jshint']
			}
		}

	});

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['jshint', 'browserSync', 'watch']);

};
