require 'test_helper'

class LiftsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lift = lifts(:one)
  end

  test "should get index" do
    get lifts_url, as: :json
    assert_response :success
  end

  test "should create lift" do
    assert_difference('Lift.count') do
      post lifts_url, params: { lift: { client_id: @lift.client_id, name: @lift.name, weight: @lift.weight } }, as: :json
    end

    assert_response 201
  end

  test "should show lift" do
    get lift_url(@lift), as: :json
    assert_response :success
  end

  test "should update lift" do
    patch lift_url(@lift), params: { lift: { client_id: @lift.client_id, name: @lift.name, weight: @lift.weight } }, as: :json
    assert_response 200
  end

  test "should destroy lift" do
    assert_difference('Lift.count', -1) do
      delete lift_url(@lift), as: :json
    end

    assert_response 204
  end
end
