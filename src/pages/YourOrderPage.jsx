import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/homepagecomponent/AppHeaders';
import { orderAPI } from '../services/api/orderAPI';
import { Package, Truck, CheckCircle, AlertCircle, Clock, ChevronRight, Search } from 'lucide-react';

const YourOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await orderAPI.getOrders();
      setOrders(Array.isArray(data) ? data : (data.orders || []));
      setError(null);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
      setError('Failed to load your orders. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      case 'shipped':
        return 'text-blue-600 bg-blue-50 border-blue-100';
      case 'processing':
        return 'text-amber-600 bg-amber-50 border-amber-100';
      case 'cancelled':
        return 'text-red-600 bg-red-50 border-red-100';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered': return <CheckCircle size={16} className="mr-1.5" />;
      case 'shipped': return <Truck size={16} className="mr-1.5" />;
      case 'processing': return <Clock size={16} className="mr-1.5" />;
      case 'cancelled': return <AlertCircle size={16} className="mr-1.5" />;
      default: return <Package size={16} className="mr-1.5" />;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredOrders = orders.filter(order =>
    order.order_number?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.order_id?.toString().includes(searchTerm) ||
    (order.order_items || order.items || []).some(item =>
      (item.product_name || item.product?.name || item.name || '').toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AppHeader />
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <AppHeader />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Your Orders</h1>
            <p className="mt-1 text-gray-500">View and track your order history</p>
          </div>

          <div className="relative max-w-md w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search orders..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm transition duration-150 ease-in-out"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 flex items-center shadow-sm">
            <AlertCircle className="mr-2" />
            {error}
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package size={40} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              {searchTerm ? "We couldn't find any orders matching your search." : "You haven't placed any orders yet. Start shopping and fill up your cart!"}
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <div
                key={order.order_id || order.id || order._id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Order Header */}
                <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-200 flex flex-wrap gap-y-4 justify-between items-center backdrop-blur-sm">
                  <div className="flex flex-wrap gap-x-12 gap-y-2 text-sm">
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Order Placed</span>
                      <span className="text-gray-900 font-medium">{formatDate(order.order_date || order.created_at || order.date)}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Total</span>
                      <span className="text-gray-900 font-medium">${typeof order.total_amount === 'number' ? order.total_amount.toFixed(2) : order.total_amount}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Order #</span>
                      <span className="font-mono text-gray-700">{order.order_number || order.order_id || order.id || order._id}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Status Badge */}
                    <div className={`flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.order_status || order.status)}`}>
                      {getStatusIcon(order.order_status || order.status)}
                      <span className="uppercase">{order.order_status || order.status || 'Processing'}</span>
                    </div>

                    <button
                      onClick={() => navigate(`/order-confirmation/${order.order_id || order.id || order._id}`)}
                      className="hidden sm:flex text-indigo-600 hover:text-indigo-800 text-sm font-medium items-center transition-colors duration-200"
                    >
                      View Details <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  {(order.order_items || order.items || []).map((item, index) => (
                    <div key={item.order_item_id || index} className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b last:border-0 border-gray-100 gap-4 sm:gap-6 group">
                      {/* Product Image */}
                      <div className="relative h-24 w-24 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm group-hover:border-indigo-200 transition-colors duration-200">
                        {item.product?.image_url || item.image_url ? (
                          <img
                            src={item.product?.image_url || item.image_url}
                            alt={item.product_name || item.product?.name || item.name}
                            className="h-full w-full object-cover object-center"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/80?text=Product';
                            }}
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-gray-50 text-gray-300">
                            <Package size={24} />
                          </div>
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0 w-full">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                          <div>
                            <h4 className="text-lg sm:text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 truncate">
                              {item.product_name || item.product?.name || item.name || 'Product Name'}
                            </h4>
                            <p className="hidden sm:block text-sm text-gray-500 mt-1 line-clamp-1">
                              {item.product?.description || 'No description available'}
                            </p>
                          </div>
                          <p className="text-lg sm:text-base font-bold text-gray-900 sm:text-right">
                            ${(typeof item.unit_price === 'number' ? item.unit_price : (item.price || 0)).toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center mt-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>

                      {/* Mobile View Details Button */}
                      <div className="sm:hidden w-full pt-2">
                        <button
                          onClick={() => navigate(`/order-confirmation/${order.order_id || order.id || order._id}`)}
                          className="w-full justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                        >
                          View Order Details
                        </button>
                      </div>
                    </div>
                  ))}

                  {(!order.order_items && !order.items || (order.order_items || order.items || []).length === 0) && (
                    <div className="text-center py-8 text-gray-500 italic bg-gray-50/50 rounded-lg">
                      Order details unavailable
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourOrderPage;
