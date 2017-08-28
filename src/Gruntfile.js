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
            quality: 20
          },{
            name: 'large',
            width: '50%',
            suffix: '_large',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['img/*.{gif,jpg,png}'],
          cwd: '',
          dest: '../dist/'
        }]
      }
    },

    cssmin: {
      target: {
        files: {
          '../dist/css/style.min.css': ['css/style.css'],
          '../dist/css/print.min.css': ['css/print.css'],
   
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['responsive_images', 'uglify', 'cssmin']);

};