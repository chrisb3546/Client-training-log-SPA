class LiftsController < ApplicationController
  before_action :set_lift, only: [:show, :update, :destroy]

  # GET /lifts
  def index
    if params[:client_id] && @client = Client.find_by_id(params[:client_id])
      @lifts = @client.lifts
      render json: @lifts
    else 
    @lifts = Lift.all

    render json: @lifts
    end 
  end

  # GET /lifts/1
  def show
    render json: @lift
  end

  # POST /lifts
  def create
    client = Client.find(params[:client_id])
    @lift = client.lifts.build(lift_params)
    
    if @lift.save
      render json: @lift, status: :created, location: @lift
      
    else
      render json: @lift.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lifts/1
  def update
    if @lift.update(lift_params)
      render json: @lift
    else
      render json: @lift.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lifts/1
  def destroy
    @lift.destroy
    render json: {message: 'success'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lift
      @lift = Lift.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lift_params
      params.require(:lift).permit(:name, :weight, :client_id)
    end
end
