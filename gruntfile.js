'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      options: {
          livereload: true
      },
      reload: {
        files : ['*', 'views/*']
      },
      scss: {
        files: ['css/*.scss', 'css/*/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
            spawn: false
        }
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'dist',
          ext: '.css'
        }]
      }
    }, 

    autoprefixer: {
        options: {
            browsers: ['last 4 versions','Android 4','iOS 6']
        },
        dist: {
            src: 'dist/style.css',
            dest: 'dist/style.css',
        }
    },

    cssmin: {
      compile: {
        files: {
         'dist/css/style.min.css': ['dist/style.css']
        } 
      }
    },


    });

    // Load tasks from NPM
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['watch']);

};

