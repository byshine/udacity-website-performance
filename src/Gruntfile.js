module.exports = function(grunt) {

  grunt.initConfig({

    uglify: {
      my_target: {
        files: {
          '../dist/js/perfmatters.min.js': ['js/perfmatters.js']
        }
      }
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '30%',
            suffix: '_small',
            quality: 10
          },{
            name: 'large',
            width: '100%',
            suffix: '_large',
            quality: 20
          }]
        },
        files: [{
          expand: true,
          src: ['img/*.{gif,jpg,png}', 'views/images/*.{gif,jpg,png}'],
          cwd: '',
          dest: '../dist/'
        }]
      }
    },

    cssmin: {
      target: {
        files: {
          '../dist/css/print.min.css': ['css/print.css']
   
        }
      }
    },

    htmlmin: {                                     // Task
        dist: { 
          options: {
            removeComments: true,
            collapseWhitespace: true
          },                                    // Target
          files: {                                   // Dictionary of files
            '../dist/index.html': 'index.html',     // 'destination': 'source'
            '../dist/project-2048.html': 'project-2048.html',
            '../dist/project-mobile.html': 'project-mobile.html', 
            '../dist/project-webperf.html': 'project-webperf.html'
          }
        }
      },
imagemin: {
        dynamic: {
            options: {
                optimizationLevel: 3
            },
            files: [{
              expand: true,
              src: ['img/*.{gif,jpg,png}'],
              cwd: '',
              dest: '../dist/'
            }]
        }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['responsive_images', 'uglify', 'cssmin', 'htmlmin']);

};