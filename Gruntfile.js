module.exports = function(grunt) {
  grunt.initConfig({

    copy: {
      bootstrap: {
        files: [
          {
            src: ['./bower_components/bootstrap/dist/css/bootstrap.min.css'], 
            dest: 'build/css/bootstrap.min.css'
          },
          {
            cwd: './bower_components/bootstrap/dist/fonts/',
            src: [ '**' ],
            dest: 'build/fonts/',
            expand: true,
            flatten: true,
            filter: 'isFile'
          }
        ]
      }
    },

    clean: [ 'build/' ],

    browserify: {
      build: {
          options: {
          debug: false,
          transform: ['reactify']
        },
        files: {
          'build/app.js': './src/app.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask("default", ['clean', 'copy', 'browserify']);
}
