namespace :specs do
  desc "Run all React tests"
  task frontend: :environment do
    system('yarn test -- --single-run')
  end
end
