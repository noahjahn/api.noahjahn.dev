module.exports = {
    apps: [{
        name: 'api.noahjahn.dev',
        cwd: '/home/github-runner/apps/api.noahjahn.dev',
        script: '/home/github-runner/apps/api.noahjahn.dev/index.js',
        instances: '1',
        exec_mode: 'fork',
        max_memory_restart: '64M',
        log_date_format: 'YYYY-MM-DD HH:mm Z',
    }]
};
