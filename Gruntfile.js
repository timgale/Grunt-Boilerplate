/* Gruntfile.js 
 * Author: Timothy Gale
 * URL: http://timothygale.co.uk
 */

module.exports = function(grunt) {

	// project config
	grunt.initConfig({

		// package file
		pkg: grunt.file.readJSON('package.json'),


		// sass
		sass: {
			options: {
				cacheLocation: '.sass-cache'
			},
			prod: {
				options: {
					style: 'compressed'
				},
				files: [{
					'css/main.css': 'css/main.sass'
				}]
			}
		},

		// uglify
		uglify: {
			options: {
				mangle: true,
				compress: true
			},
			jsCompress: {
				files: {
					'js/main.min.js': 'js/main.js'
				}
			}
		},

		// image optim
		imageoptim: {
			options: {
				jpegMini: false,
				imageAlpha: false,
				quitAfter: true
			},
			files: ['img']
		},

		// watch
		watch: {
			options: {
				livereload: 1337
			},
			sassWatch: {
				files: 'css/**/*.sass',
				tasks: ['sass:prod']
			},
			jsWatch: {
				files: 'js/main.js',
				tasks: ['uglify:jsCompress']
			}
		}

	});

	// enable plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-imageoptim');

	// register tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('image', ['imageoptim']);

}