module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        customers: {
            files: ['customers/static/customers/js/source/*'],
            tasks: ['customers'],
        },
        customers_less: {
            files: ['customers/static/customers/less/*'],
            tasks: ['customers_less'],
        },
    },
    less: {
        customers_less: {
            files: [
                {
                    expand: true,
                    cwd: 'customers/static/customers/less',
                    src: '**/*.less',
                    dest: 'customers/static/customers/css',
                    ext: '.css'
                }
            ]
        },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      customers: {
        files: [
            {
                expand: true,
                cwd: 'customers/static/customers/js/source',
                src: '**/*.js',
                dest: 'customers/static/customers/js',
                ext: '.min.js',
            }
        ]
      },
    }
  });
 
  // Plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
 
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less']);
  // Uglify Tasks
  grunt.registerTask('customers', ['uglify:customers']);
  // LESS Tasks
  grunt.registerTask('customers_less', ['less:customers_less']);
};